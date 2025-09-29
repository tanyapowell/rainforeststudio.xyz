const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItTOC = require("markdown-it-table-of-contents");
const slugifyLib = require("slugify");
const { JSDOM } = require("jsdom");

const slugify = (value) =>
  slugifyLib(value, {
    lower: true,
    strict: true,
    remove: /[^A-Za-z0-9\s-]/g
  });

module.exports = function(eleventyConfig) {
  const markdown = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
    .use(markdownItAnchor, {
      slugify,
      permalink: false,
      tabIndex: false,
      level: [2, 3, 4]
    })
    .use(markdownItTOC, {
      slugify,
      includeLevel: [2, 3],
      containerClass: "toc-inline",
      markerPattern: /\[\[toc\]\]/i
    });

  eleventyConfig.setLibrary("md", markdown);

  // Copy assets
  eleventyConfig.addPassthroughCopy("assets");

  // Collections for pages
  eleventyConfig.addCollection("pages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_pages/*.md");
  });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("_pages/projects/**/*.md")
      .filter((item) => item.url !== "/projects/")
      .sort((a, b) => (b.data.order || 0) - (a.data.order || 0));
  });

  eleventyConfig.addCollection("notes", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("_pages/notes/**/*.md")
      .filter((item) => item.url !== "/lab-notes/")
      .sort((a, b) => {
        const aDate = a.data.date ? new Date(a.data.date) : new Date(0);
        const bDate = b.data.date ? new Date(b.data.date) : new Date(0);
        return bDate - aDate;
      });
  });

  eleventyConfig.addFilter("findBySlug", function(items, slug) {
    if (!Array.isArray(items) || !slug) return undefined;
    const target = slug.toString().toLowerCase();
    return items.find((item) => {
      const candidates = [item.data.projectSlug, item.data.slug, item.fileSlug]
        .filter(Boolean)
        .map((value) => value.toString().toLowerCase());
      return candidates.includes(target);
    });
  });

  eleventyConfig.addFilter("readableDate", function(date, format = "MMMM d, yyyy") {
    if (!date) return "";
    const jsDate = date instanceof Date ? date : new Date(date);
    if (Number.isNaN(jsDate.getTime())) return "";
    return DateTime.fromJSDate(jsDate).toFormat(format);
  });

  eleventyConfig.addFilter("notesForProject", function(items, slug) {
    if (!Array.isArray(items) || !slug) return [];
    const target = slug.toString().toLowerCase();
    return items.filter((item) => {
      const noteProject = (item.data.project || item.data.projectSlug || item.fileSlug || "").toString().toLowerCase();
      return noteProject === target;
    });
  });

  eleventyConfig.addFilter("headings", function(content, levels = [2, 3]) {
    if (!content) return [];
    const dom = new JSDOM(`<body>${content}</body>`);
    const document = dom.window.document;
    const selector = levels.map((level) => `h${level}[id]`).join(",");
    if (!selector) return [];
    return Array.from(document.querySelectorAll(selector)).map((node) => ({
      id: node.id,
      text: node.textContent.trim(),
      level: Number(node.tagName.replace("H", ""))
    }));
  });

  // Global data
  eleventyConfig.addGlobalData("site", {
    title: "Rainforest Studio",
    description: "An immersive virtual reality experience built with A-Frame and Eleventy.",
    url: "https://yourusername.github.io/your-repo-name",
    baseurl: "/your-repo-name"
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};

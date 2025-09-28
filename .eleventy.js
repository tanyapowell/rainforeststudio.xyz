const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
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

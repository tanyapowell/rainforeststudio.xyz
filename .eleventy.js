module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("assets");

  // Collections for pages
  eleventyConfig.addCollection("pages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_pages/*.md");
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

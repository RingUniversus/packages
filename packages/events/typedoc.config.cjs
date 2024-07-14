/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ["src/index.ts"],
  plugin: ["typedoc-plugin-markdown"],
  out: ".",
  hideBreadcrumbs: true,
  readme: "none",
  disableSources: true,
  cleanOutputDir: false,
  githubPages: false,
};

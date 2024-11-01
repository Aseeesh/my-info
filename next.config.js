// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = isGithubActions ? "/Aseeesh/my-info" : "";

module.exports = {
  output: 'export', // Export static HTML for GitHub Pages
  basePath: repo,   // Specify the base path if using GitHub Pages
  assetPrefix: repo, // Prefix assets path for GitHub Pages
  reactStrictMode: true,
  distDir:"dist",
  images:{
    unoptimized:true
  }
}
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx", 
    "gatsby-transformer-remark", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-transformer-json",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    options:{
      "name": "data",
      "path": "./src/data/"
    },
    options:{
      "name": "style",
      "path": "./src/styles/"
    },
    __key: "pages"
  },{
    resolve: `gatsby-source-filesystem`,
    options: {
    path: `./src/data/`,
    },
    __key: "data"
  }]
};
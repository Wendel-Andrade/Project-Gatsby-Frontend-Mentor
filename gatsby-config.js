module.exports = {
   siteMetadata: {
      siteUrl: "https://www.yourdomain.tld",
      title: "Template MGCodes wbsite Gatsby V1.0",
      description: "Project description",
      author: "Marcial Garcia"
   },
   plugins: [
      "gatsby-plugin-styled-components",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "images",
            path: `${__dirname}/src/images/`,
            ignore: [`**/*.svg`, `**/*.ico`],
         },
      },
      {
         resolve: `gatsby-plugin-typography`,
         options: {
            pathToConfigModule: `src/theme/typography.js`,
         },
      },
      {
         resolve: `gatsby-plugin-page-creator`,
         options: {
            path: `${__dirname}/src/pages`,
            ignore: [`**/styles.js`, `**/content.js`],
         },
      },
      {
         resolve: `gatsby-plugin-manifest`,
         icons: [
           {
             "src": "static/assets/favicon.png",
             "sizes": "512x512",
             "type": "image/png",
             "purpose": "any maskable"
           }
         ],
         options: {
           name: `Project name`,
           short_name: `shortname`,
           lang: `pt-br`,
           start_url: `/`,
           background_color: `#FFFFFF`,
           theme_color: `#0000FF`,
           display: `minimal-ui`,
           icon: `static/assets/favicon.png`, // 512x512px.
           icon_options: {
             purpose: `any maskable`
           }
         },
       },
   
  ],
};
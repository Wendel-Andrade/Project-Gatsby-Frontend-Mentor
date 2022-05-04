module.exports = {
   siteMetadata: {
      siteUrl: "https://www.yourdomain.tld",
      title: "Space tourism | Frontend Mentor ",
      description: "Space tourism multi-page website | Challenge Frontend Mentor",
      author: "Wendel Andrade"
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
             "src": "static/assets/favicon.svg",
             "sizes": "512x512",
             "type": "image/png",
             "purpose": "any maskable"
           }
         ],
         options: {
           name: `Gatsby-project | Frontend Mentor`,
           short_name: `Gatsby-project`,
           lang: `pt-br`,
           start_url: `/`,
           background_color: `#0B0D17`,
           theme_color: `#D0D6F9`,
           display: `minimal-ui`,
           icon: `static/assets/favicon.svg`, // 512x512px.
           icon_options: {
             purpose: `any maskable`
           }
         },
       },
   
  ],
};
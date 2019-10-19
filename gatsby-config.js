module.exports = {
  siteMetadata: {
    title: `Courtney Corlew`,
    description: `Description Here`,
    author: `@courtneycorlew`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Courtney-Corlew-Site`,
        short_name: `Courtney Corlew`,
        start_url: `/`,
        background_color: `rgba(251, 208, 184, 0.5)`,
        theme_color: `rgba(251, 208, 184, 0.5)`,
        display: `minimal-ui`,
        icon: `src/images/courtney-corlew-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

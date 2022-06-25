module.exports = {
  siteMetadata: {
    title: `Audrey Hendel`,
    description: `Wonderful! You’ve made the choice of Joy, Power and Happiness and are taking your health in hand. I’m Audrey Hendel, psychological counselor and shamanic healer and accompany you, with compassion, tenderness, and a touch magic towards Happiness! With a touch of Magic and Love nothing is impossible.
    `,
    author: `Audrey Hendel`,
    avatar: `images/audrey.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `../images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-styled-components`,
    `styled-components`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Yaml`,
        path: `../data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Md`,
        path: `../data/`,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        name: `YamlMd`,
        plugins: [
          {
            resolve: 'gatsby-yaml-full-markdown',
            options: {
              /* gatsby-yaml-full-markdown options here */
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `../images/om-rose-.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  /*localhost:8000/___graphql*/
  siteMetadata: {
    title: 'James McArthur',
    author: 'James McArthur',
    head: 'james is cool',
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,

  ],
}

// let activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// console.log('Using environment config: ${activeEnv}')

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

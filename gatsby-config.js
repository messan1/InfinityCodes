module.exports = {
  siteMetadata: {
    title: `InfinityCodes`,
    description: `Apprenez à programmez en ligne les technologies comme React, Nodejs, Js, Html & Css, Python, Flutter`,
    author: `Messan Christian`,
    siteUrl: `https://infinitycodes.io`,
    keywords: `['nodejs','php','python','javascript','react','html','css','flutter','apprendre à programmer','comment apprendre à programmer','comment apprendre à programmer gratuitement']`
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `@disqus_yf1CYtH5eH`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://infinitycodes.io`,
        sitemap: 'https://infinity.io/infinity.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/infinity.xml`,
        exclude: ["/category/*", `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    
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
        path: `${__dirname}/articles`,
        name: "articles",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://refacc.us7.list-manage.com/subscribe/post?u=1c9b4fc59e9f70f764da90623&amp;id=8b9f1269c9", 
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `infinity-codes`,
        short_name: `infinity`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/infinity.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140039115-1",
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

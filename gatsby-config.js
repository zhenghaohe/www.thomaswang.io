require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Thomas Wang`,
    author: `Thomas Wang`,
    keywords: `Thomas Wang, personal website, blog, developer, tech`,
    description: `A personal site and blog by Thomas Wang, software developer from California 🌴`,
    siteUrl: `https://www.thomaswang.io/`,
    social: {
      twitter: `ThomasWang`,
      instagram: `thomaspwang`,
      github: `thomaswang`,
      dribbble: `thomaswang`,
      codepen: `thomaswang`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: "Night Owl",
              extensions: [
                {
                  identifier: "sdras.night-owl",
                  version: "1.1.3",
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
              className: `autolink`,
              removeAccents: true,
              enableCustomId: true,
              isIconAfterHeader: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GATSBY_GOOGLE_ANALYTICS}`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thomas Wang`,
        short_name: `ThomasWang`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + "/blog" + edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl + "/blog" + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/feed.xml",
            title: "Thomas Wang's Blog RSS Feed",
            match: "^/blog/",
          },
        ],
      },
    },
  ],
}

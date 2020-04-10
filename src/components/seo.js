import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  author,
  description,
  lang,
  meta,
  keywords,
  title,
  url,
  imageUrl,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaAuthor = author || site.siteMetadata.author
  const metaKeywords = keywords || site.siteMetadata.keywords
  const metaUrl = url || site.siteMetadata.siteUrl

  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: metaTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: metaUrl,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: metaAuthor,
    },
    {
      name: `twitter:title`,
      content: metaTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `fb:app_id`,
      content: `401910847061249`,
    },
  ]

  imageUrl
    ? metaTags.push({
        property: `og:image`,
        content: imageUrl,
      })
    : metaTags.push(
        {
          property: `og:image`,
          content: `https://www.thomaswang.io/share.jpg`,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        }
      )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title}  - %s `}
      meta={metaTags
        .concat(
          metaKeywords.length > 0
            ? {
                name: `keywords`,
                content: metaKeywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default SEO

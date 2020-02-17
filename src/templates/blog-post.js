import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Subscribe from "../components/subscribe"
import Comments from "../components/comments"

export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍿")
      .join("")} ${minutes} min read`
  } else {
    return `${new Array(cups || 1).fill("🥤").join("")} ${minutes} min read`
  }
}

const BlogPostTemplate = props => {
  const post = props.data.mdx
  const blogMarkdown = post.frontmatter
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next, slug } = props.pageContext
  const timeToRead = formatReadingTime(post.timeToRead)

  return (
    <PageWrapper location={props.location} title={siteTitle}>
      <SEO
        title={blogMarkdown.title}
        description={blogMarkdown.description || post.excerpt}
        url={`https://www.thomaswang.io/blog${slug}`}
        imageUrl={blogMarkdown.metaImageUrl && blogMarkdown.metaImageUrl}
      />
      <h1>{blogMarkdown.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        <span>{blogMarkdown.date}</span>
        <span>&nbsp; • &nbsp;</span>
        <span>{timeToRead}</span>
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Comments />
      <hr
        style={{
          marginTop: rhythm(1),
          marginBottom: rhythm(1),
        }}
      />
      <div style={{ textAlign: "center", margin: "4rem 0 5rem" }}>
        To propose a change to this post,{" "}
        <a
          href={`https://github.com/thomaswang/www.thomaswang.io/edit/master/content/blog/${slug}index.mdx`}
        >
          edit on GitHub
        </a>
        .
      </div>
      <Subscribe />
      <Bio />
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={`blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </PageWrapper>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        metaImageUrl
      }
    }
  }
`

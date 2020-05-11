import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { connect } from "react-redux"

import Bio from "../components/bio"
import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Subscribe from "../components/subscribe"
import Comments from "../components/comments"

const StyledList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;

  @media all and (max-width: 650px) {
    flex-direction: column-reverse;
  }
`

const StyledListItem = styled.li`
  @media all and (min-width: 651px) {
    margin: 0;
    width: 50%;
  }
`

const Breaker = styled.div`
  @media all and (min-width: 651px) {
    height: inherit;
    width: 1px;
    background: ${({ theme }) => theme.navBorder};
  }
`

const StyledPrev = styled(Link)`
  display: flex;
  align-items: center;
  box-shadow: none;
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.navBorder};
  border-left: 1px solid ${({ theme }) => theme.navBorder};
  border-bottom: 1px solid ${({ theme }) => theme.navBorder};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: ${props => (props.isDarkMode ? "grey" : "#e1e4e8")};

    > div > svg {
      transform: scale(1.1);
    }
  }

  > div {
    max-width: 300px;
    text-align: left;
  }

  @media all and (max-width: 650px) {
    border-right: 1px solid navBorder;

    > div {
      max-width: 100%;
    }
  }
`

const StyledNext = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: none;
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.navBorder};
  border-right: 1px solid ${({ theme }) => theme.navBorder};
  border-bottom: 1px solid ${({ theme }) => theme.navBorder};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: ${props => (props.isDarkMode ? "grey" : "#e1e4e8")};

    > div > svg {
      transform: scale(1.1);
    }
  }

  > div {
    max-width: 300px;
    text-align: right;
  }

  @media all and (max-width: 650px) {
    border-left: 1px solid navBorder;

    > div {
      max-width: 100%;
    }
  }
`

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
  const isDarkMode = props.isDarkMode

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
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        To propose a change to this post,{" "}
        <a
          href={`https://github.com/thomaswang/www.thomaswang.io/edit/master/content/blog/${slug}index.mdx`}
        >
          edit on GitHub
        </a>
        .
      </div>
      <hr
        style={{
          marginTop: rhythm(1.5),
          marginBottom: rhythm(1.5),
        }}
      />
      <Bio />
      <StyledList>
        <StyledListItem>
          {previous && (
            <div>
              <StyledPrev
                to={`blog${previous.fields.slug}`}
                rel="prev"
                isDarkMode={isDarkMode}
              >
                <div style={{ display: "grid", placeitems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: "16px" }}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 8 8 12 12 16"></polyline>
                    <line x1="16" y1="12" x2="8" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
                    Previous
                  </div>
                  <div>{previous.frontmatter.title}</div>
                </div>
              </StyledPrev>
            </div>
          )}
        </StyledListItem>
        <Breaker />
        <StyledListItem>
          {next && (
            <div>
              <StyledNext
                to={`blog${next.fields.slug}`}
                rel="next"
                isDarkMode={isDarkMode}
              >
                <div>
                  <div style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
                    Next
                  </div>
                  <div>{next.frontmatter.title}</div>
                </div>
                <div style={{ display: "grid", placeitems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: "16px" }}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 16 16 12 12 8"></polyline>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
              </StyledNext>
            </div>
          )}
        </StyledListItem>
      </StyledList>
      <div style={{ margin: `${rhythm(2.5)} 0` }}>
        <Subscribe />
      </div>
    </PageWrapper>
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(BlogPostTemplate)

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

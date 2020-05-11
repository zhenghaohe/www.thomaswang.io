import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { connect } from "react-redux"

import { rhythm } from "../utils/typography"
import Bio from "../components/bio"
import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import Button from "../components/button"
import Subscribe from "../components/subscribe"
import { formatReadingTime } from "../templates/blog-post"
import { lightTheme, darkTheme } from "../theme"

const CardPosts = props => {
  const { posts, isDarkMode, theme } = props
  const [show, setShow] = useState(false)

  return (
    <>
      {posts.map(({ node }, index) => {
        const title = node.frontmatter.title || node.fields.slug
        const timeToRead = formatReadingTime(node.timeToRead)

        if (index < 5 || show) {
          return (
            <Card
              key={node.fields.slug}
              to={`blog${node.fields.slug}`}
              theme={theme}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {title}
              </h3>
              <small>
                <span>{node.frontmatter.date}</span>
                <span>&nbsp; • &nbsp;</span>
                <span>{timeToRead}</span>
              </small>
              <p
                style={{
                  margin: "0.5rem auto 0",
                }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </Card>
          )
        }

        return null
      })}
      {posts.length >= 5 && !show && (
        <Button
          marginTop="48px"
          background={isDarkMode && "#26bcfb"}
          center
          onClick={() => {
            setShow(true)
          }}
        >
          ↓ show all posts
        </Button>
      )}
    </>
  )
}

const Blog = props => {
  const { data, location, isDarkMode } = props
  const posts = data.allMdx.edges
  const siteTitle = data.site.siteMetadata.title
  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <PageWrapper location={location} title={siteTitle}>
      <SEO title="Blog" url="https://www.thomaswang.io/blog/" />
      <Bio />
      <div style={{ margin: `20px 0 ${rhythm(2)}` }}>
        <CardPosts posts={posts} isDarkMode={isDarkMode} theme={theme} />
      </div>
      <hr style={{ marginTop: rhythm(3), marginBottom: rhythm(2) }} />
      <div className="systemfont" style={{ textAlign: "center" }}>
        Do you like this blog?
        <br />
        ↓
        <br />
        See the <Link to="/analytics/">analytics</Link> &{" "}
        <a href="https://t.wang.sh/sponsor-blog">become a sponsor</a>.
      </div>
      <Subscribe style={{ margin: "4rem 0 5rem" }} />
    </PageWrapper>
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(Blog)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

const Card = styled(Link)`
  display: block;
  width: 100%;
  padding: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  background: ${props => props.theme.cardBackground};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.cardBorder};
  box-shadow: ${props => props.theme.cardBoxShadow};
  will-change: transform;
  color: ${props => props.theme.cardText};
  transition: box-shadow 0.2s ease;

  h3 {
    transition: none;
  }

  &:hover {
    box-shadow: ${props => props.theme.cardBoxShadowHover};
  }

  &::before {
    box-shadow: ${props => props.theme.cardBoxBorder};
  }
`

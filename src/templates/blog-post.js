import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { connect } from "react-redux"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

import Bio from "../components/bio"
import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Subscribe from "../components/subscribe"
import Comments from "../components/comments"
import { AvatarLink } from "../components/bio"
import ViewCounter from "../components/ViewCounter"

const StyledEmailIcon = styled(EmailIcon)`
  border: 1px #eee solid;
  border-radius: 50%;
  background: #eee;

  &:hover {
    background: #fff;
    border: 1px #ccc solid;
  }
`

const StyledTwitterIcon = styled(TwitterIcon)`
  margin-right: 0.75rem;
  border: 1px #eee solid;
  border-radius: 50%;
  background: #eee;

  &:hover {
    background: #fff;
    border: 1px #ccc solid;
  }
`

const StyledFBIcon = styled(FacebookIcon)`
  margin-right: 0.75rem;
  border: 1px #eee solid;
  border-radius: 50%;
  background: #eee;

  &:hover {
    background: #fff;
    border: 1px #ccc solid;
  }
`

const StyledLIIcon = styled(LinkedinIcon)`
  margin-right: 0.75rem;
  border: 1px #eee solid;
  border-radius: 50%;
  background: #eee;

  &:hover {
    background: #fff;
    border: 1px #ccc solid;
  }
`

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
    border-right: 1px solid ${({ theme }) => theme.navBorder};

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
    border-left: 1px solid ${({ theme }) => theme.navBorder};

    > div {
      max-width: 100%;
    }
  }
`

export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)
  if (cups > 5) {
    return `${minutes} minute read ${new Array(Math.round(cups / Math.E))
      .fill("🍿")
      .join("")}`
  } else {
    return `${minutes} minute read ${new Array(cups || 1).fill("🥤").join("")}`
  }
}

export function formatReadingTimeEmoji(minutes) {
  let cups = Math.round(minutes / 5)
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E)).fill("🍿").join("")}`
  } else {
    return `${new Array(cups || 1).fill("🥤").join("")}`
  }
}

const BlogPostTemplate = props => {
  const post = props.data.mdx
  const blogMarkdown = post.frontmatter
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next, slug } = props.pageContext
  const timeToRead = formatReadingTime(post.timeToRead)
  const emojiToRead = formatReadingTimeEmoji(post.timeToRead)
  const isDarkMode = props.isDarkMode
  const shareUrl = `https://www.thomaswang.io/blog${slug}`

  return (
    <PageWrapper location={props.location} title={siteTitle}>
      <SEO
        title={blogMarkdown.title}
        description={blogMarkdown.description || post.excerpt}
        url={shareUrl}
        imageUrl={blogMarkdown.metaImageUrl && blogMarkdown.metaImageUrl}
      />
      <h1 style={{ marginTop: rhythm(-1 / 20) }}>{blogMarkdown.title}</h1>
      <div
        style={{
          ...scale(-1 / 8),
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          marginBottom: rhythm(1 / 2),
          marginTop: rhythm(-1 / 2),
        }}
      >
        <div style={{ display: `flex`, alignItems: `center` }}>
          <AvatarLink
            to="/blog/"
            style={{ display: "grid", placeItems: "center" }}
          >
            <Image
              fixed={props.data.avatar.childImageSharp.fixed}
              alt={props.data.site.siteMetadata.author}
              style={{
                marginRight: rhythm(1 / 3),
                marginBottom: 0,
                width: 30,
                height: 30,
                minWidth: 30,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </AvatarLink>
          <span
            style={{
              fontFamily: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
              fontWeight: "600",
            }}
          >
            By {props.data.site.siteMetadata.author}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontFamily: `'Allura', cursive`,
              fontSize: "1.25rem",
              marginRight: "1rem",
            }}
          >
            share
          </div>
          <TwitterShareButton
            className="center"
            url={shareUrl}
            title={blogMarkdown.title}
            via="ThomasWang"
          >
            <StyledTwitterIcon
              bgStyle={{ fill: "transparent" }}
              iconFillColor="black"
              size="27"
              round={true}
            />
          </TwitterShareButton>
          <FacebookShareButton
            className="hide-on-mobile center"
            url={shareUrl}
            quote=""
          >
            <StyledFBIcon
              bgStyle={{ fill: "transparent" }}
              iconFillColor="black"
              size="27"
              round={true}
            />
          </FacebookShareButton>
          <LinkedinShareButton
            className="hide-on-mobile center"
            url={shareUrl}
            title={blogMarkdown.title}
            summary={blogMarkdown.description || post.excerpt}
            source="ThomasWang.io"
          >
            <StyledLIIcon
              bgStyle={{ fill: "transparent" }}
              iconFillColor="black"
              size="27"
              round={true}
            />
          </LinkedinShareButton>
          <EmailShareButton
            className=" center"
            url={shareUrl}
            subject={`ThomasWang.io - ${blogMarkdown.title}`}
            body={`From Thomas Wang's Blog: ${blogMarkdown.description ||
              post.excerpt}`}
          >
            <StyledEmailIcon
              bgStyle={{ fill: "transparent" }}
              iconFillColor="black"
              size="27"
              round={true}
            />
          </EmailShareButton>
        </div>
      </div>
      <div
        style={{
          ...scale(-1 / 5),
          fontFamily: `"Ubuntu", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          marginBottom: rhythm(1 / 1.25),
        }}
      >
        <div>
          <span style={{ fontStyle: "italic" }}>{blogMarkdown.date}</span>
          <span>&nbsp; · &nbsp;</span>
          <span className="hide-on-mobile">{timeToRead}</span>
          <span className="show-on-mobile">{emojiToRead}</span>
        </div>
        <div>
          <ViewCounter id={slug} />
        </div>
      </div>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Comments />
      <div
        style={{
          ...scale(-1 / 5),
          textAlign: "center",
          margin: "2rem 0",
          fontStyle: "italic",
        }}
      >
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
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

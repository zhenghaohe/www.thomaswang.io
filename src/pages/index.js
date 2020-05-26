import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { connect } from "react-redux"

import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import Button from "../components/button"
import { rhythm, scale } from "../utils/typography"

const capitalizeFirstLetter = string => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  } else {
    return string
  }
}

const extractGetValueFromUrl = (key, urlString) => {
  const url = new URL(urlString || window.location.href)
  const results = url.searchParams.getAll(key)
  return results.length > 1 ? results[results.length - 1] : results[0]
}

const SocialMedia = props => (
  <StaticQuery
    query={socialQuery}
    render={data => {
      const { social } = data.site.siteMetadata
      return (
        <Socials>
          <Social
            href={`https://t.wang.sh/youtube`}
            alt="youtube"
            aria-label="youtube link"
            style={{ marginTop: "4px" }}
          >
            <svg
              enableBackground="new 0 0 512 512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={props.logoColor}
                d="m490.24 113.92c-13.888-24.704-28.96-29.248-59.648-30.976-30.656-2.08-107.744-2.944-174.528-2.944-66.912 0-144.032.864-174.656 2.912-30.624 1.76-45.728 6.272-59.744 31.008-14.304 24.672-21.664 67.168-21.664 141.984v.096.096.064c0 74.496 7.36 117.312 21.664 141.728 14.016 24.704 29.088 29.184 59.712 31.264 30.656 1.792 107.776 2.848 174.688 2.848 66.784 0 143.872-1.056 174.56-2.816 30.688-2.08 45.76-6.56 59.648-31.264 14.432-24.416 21.728-67.232 21.728-141.728 0 0 0-.096 0-.16 0 0 0-.064 0-.096 0-74.848-7.296-117.344-21.76-142.016zm-298.24 238.08v-192l160 96z"
              />
            </svg>
          </Social>
          <Social
            href={`https://twitter.com/${social.twitter}`}
            alt="twitter"
            aria-label="twitter link"
            style={{ marginLeft: "1px" }}
          >
            <svg
              enableBackground="new 0 0 512 512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={props.logoColor}
                d="m512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408-19.264-20.512-46.72-33.216-76.672-33.216-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44 46.496 29.984 101.6 47.104 161.024 47.104 193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
              />
            </svg>
          </Social>
          <Social
            href={`https://instagram.com/${social.instagram}`}
            alt="instagram"
            aria-label="instagram link"
            style={{ marginRight: "3px" }}
          >
            <svg viewBox="0 0 511 511.9" xmlns="http://www.w3.org/2000/svg">
              <path
                fill={props.logoColor}
                d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"
              />
              <path
                fill={props.logoColor}
                d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"
              />
              <path
                fill={props.logoColor}
                d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"
              />
            </svg>
          </Social>
          <Social
            href={`https://dribbble.com/${social.dribbble}`}
            alt="dribbble"
            aria-label="dribbble link"
          >
            <svg
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={props.logoColor}
                d="m16.354 23.17c.02-.006.039-.014.059-.021 12.215-4.853 8.836-23.149-4.413-23.149-6.649 0-12 5.42-12 12 0 8.327 8.434 14.269 16.354 11.17zm-11.073-3.111c.852-1.432 3.609-5.472 8.315-6.866.984 2.509 1.674 5.436 1.742 8.755-3.566 1.199-7.327.392-10.057-1.889zm11.532 1.263c-.131-3.189-.782-6.017-1.71-8.467 2.082-.325 4.492-.108 7.225.987-.581 3.261-2.666 6.002-5.515 7.48zm5.672-9.031c-3.01-1.131-5.663-1.272-7.959-.834-.355-.8-.728-1.569-1.123-2.277 3.523-1.407 5.605-3.122 6.537-4.03 1.645 1.904 2.622 4.369 2.545 7.141zm-3.61-8.209c-.848.807-2.845 2.437-6.26 3.77-1.674-2.648-3.464-4.516-4.598-5.562 3.628-1.494 7.812-.856 10.858 1.792zm-12.292-1.059c.856.753 2.735 2.561 4.548 5.357-2.49.802-5.612 1.391-9.409 1.474.604-2.894 2.408-5.346 4.861-6.831zm-5.051 8.337c4.25-.069 7.69-.74 10.409-1.648.376.659.733 1.377 1.076 2.123-4.735 1.508-7.694 5.401-8.827 7.159-1.828-2.04-2.836-4.702-2.658-7.634z"
              />
            </svg>
          </Social>
          <Social
            href={`https://github.com/${social.github}`}
            alt="github"
            aria-label="github link"
          >
            <svg
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={props.logoColor}
                d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
              />
            </svg>
          </Social>
          <Social
            href={`https://codepen.io/${social.codepen}`}
            alt="codepen"
            aria-label="codepen link"
          >
            <svg
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={props.logoColor}
                d="m24 7.598c-.044-.264-.08-.47-.36-.641-11.449-6.791-11.287-7.297-12.03-6.848-8.677 5.394-11.092 6.597-11.439 7.017-.315.323-.171.818-.171 8.298-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029 11.224-7.956 11.497-7.636 11.478-8.375 0 0-.012-7.927 0-7.826zm-1.5 6.491-3.876-2.359 3.876-2.697zm-5.277-3.212-4.473-2.722v-6.07l9.126 5.555zm-5.223 3.633-3.876-2.697 3.876-2.359 3.876 2.359zm-.75-12.426v6.074c-1.739 1.079-3.209 1.98-4.451 2.734l-4.675-3.252zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32v-5.029zm1.33.924 4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z"
              />
            </svg>
          </Social>
        </Socials>
      )
    }}
  />
)

const IndexPage = props => {
  const siteTitle = "Thomas Wang"
  const darkMode = props.isDarkMode
  const logoColor = darkMode ? "white" : "black"

  let urlPath
  if (typeof window !== "undefined") {
    urlPath = capitalizeFirstLetter(extractGetValueFromUrl("ref"))
  }

  return (
    <PageWrapper
      location={props.location}
      title={siteTitle}
      maxWidth={rhythm(28)}
    >
      <SEO title="Home / Thomas Wang" url="https://www.thomaswang.io/" />

      <IconContainer>
        <Interactive>
          <Waver>
            <span role="img" aria-label="wave emoji" title="Waving hand">
              👋🏼
            </span>
          </Waver>
        </Interactive>
        <Icon src="./icon.svg" alt="" aria-label="icon" />
      </IconContainer>

      <div style={{ margin: "2rem 1rem 4rem" }}>
        <p
          style={{
            margin: "1rem auto 3rem",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {urlPath ? `Hello ${urlPath}.` : "Hello."}
        </p>
        <p
          style={{
            ...scale(1),
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          I’m Thomas Wang and I create digital products and experiences.
        </p>
        <p
          className="systemfont"
          style={{ maxWidth: "28rem", margin: "0 auto" }}
        >
          My favorite products are functional with subtle interactions. I am
          constantly inspired by the community of creative people on the web,
          and I try to give back.
        </p>
      </div>

      <SocialMedia logoColor={logoColor} />

      <Link to="/blog/">
        <Button
          marginTop="4rem"
          marginBottom="4rem"
          background={darkMode && "#26bcfb"}
          center
        >
          Blog
        </Button>
      </Link>
    </PageWrapper>
  )
}

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter
          instagram
          github
          codepen
          dribbble
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(IndexPage)

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 1rem 0;
`

const wave = keyframes`
    0% { transform: rotate(  0.0deg) }
   10% { transform: rotate(-10.0deg) }
   20% { transform: rotate( 12.0deg) }
   30% { transform: rotate(-10.0deg) }
   40% { transform: rotate(  9.0deg) }
   50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
`

const Icon = styled.img`
  position: relative;
  margin-top: 32px;
  margin-right: 32px;
  width: 40px;
`

const Interactive = styled.div`
  position: relative;
  top: 0.5rem;
  left: -0.5rem;
`

const Waver = styled.span`
  font-size: 24px;
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  width: 30rem;
  margin: 0 auto;
  padding: 0 1rem;

  svg {
    width: 20px;
  }
`

const Social = styled.a`
  vertical-align: middle;
  display: inline-block;
  text-decoration: none;
  box-shadow: none;
  color: #ffffff;

  &:hover {
    opacity: 0.75;
  }
`

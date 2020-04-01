import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import Tilt from "react-tilt"
import { connect } from "react-redux"

import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import Button from "../components/button"
import { scale } from "../utils/typography"

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

const IndexPage = props => {
  const siteTitle = "Thomas Wang"
  const darkMode = props.isDarkMode

  let urlPath
  if (typeof window !== "undefined") {
    urlPath = capitalizeFirstLetter(extractGetValueFromUrl("ref"))
  }

  return (
    <PageWrapper location={props.location} title={siteTitle}>
      <SEO title="Home" url="https://www.thomaswang.io/" />
      <Card>
        <CardTilt className="Tilt" options={{ max: 25 }}>
          <div className="Tilt-inner">
            <Icon src="./icon.svg" alt="" aria-label="icon" />
          </div>
        </CardTilt>
      </Card>

      <h1
        style={{
          ...scale(1),
          textAlign: "center",
        }}
      >
        Hello {urlPath}{" "}
        <Waver>
          <span role="img" aria-label="wave emoji" title="Waving hand">
            👋
          </span>
        </Waver>
      </h1>
      <div style={{ margin: "3rem 1rem" }}>
        <p>
          I'm Thomas Wang and I create digital products. My favorite products
          are functional with subtle interactions. I am constantly inspired by
          the community of creative people on the web, and I try to give back.
        </p>
        <div
          style={{
            margin: "1.5rem 0",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            whiteSpace: "nowrap",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ marginRight: "8px" }}
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
          Design portfolio:
          <a href="https://twang.design" style={{ marginLeft: "4px" }}>
            twang.design
          </a>
        </div>
        <div
          style={{
            margin: "1.5rem 0",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            whiteSpace: "nowrap",
          }}
        >
          <svg
            height="18"
            width="18"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}
          >
            <path
              d="m11.7 4.3c-.3811429.38884351-.3811429 1.01115649 0 1.4l1.6 1.6c.3888435.38114288 1.0111565.38114288 1.4 0l3.77-3.77c1.029602 2.27526348.5421924 4.95036447-1.2237216 6.7162784-1.7659139 1.765914-4.4410149 2.2533236-6.7162784 1.2237216l-6.91 6.91c-.82842712.8284271-2.17157288.8284271-3 0-.82842713-.8284271-.82842713-2.1715729 0-3l6.91-6.91c-1.02960202-2.27526348-.54219239-4.95036447 1.22372157-6.71627843 1.76591393-1.76591396 4.44101493-2.25332359 6.71627843-1.22372157l-3.76 3.76z"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              transform="matrix(-1 0 0 1 20 1)"
            />
          </svg>
          Open source projects:
          <a href="https://twang.dev" style={{ marginLeft: "4px" }}>
            twang.dev
          </a>
        </div>
      </div>
      <Link to="/blog/">
        <Button
          marginTop="3rem"
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

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(IndexPage)

const Card = styled.div`
  transform: perspective(1000px) rotateX(-3deg) rotateY(23deg)
    scale3d(1.1, 1.1, 1.1);
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

const Waver = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`

const CardTilt = styled(Tilt)`
  transform-style: preserve-3d;
  height: 200px;
  width: 250px;
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  margin: 2rem auto 4rem auto;
  cursor: move;

  .Tilt-inner {
    transform: translateZ(20px);
  }
`

const Icon = styled.img`
  margin-top: 16px;
  width: 100px;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3));
`

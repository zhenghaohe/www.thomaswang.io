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
  let urlPath = capitalizeFirstLetter(extractGetValueFromUrl("ref"))

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
          I'm Thomas Wang – I design and develop digital products. My favorite
          products are functional with subtle interactions. I am constantly
          inspired by the community of creative people on the web, and I try to
          give back.
        </p>
        <ul>
          <li>
            Design portfolio: <a href="https://twang.design">twang.design</a>
          </li>
          <li>
            Open source work: <a href="https://twang.dev">twang.dev</a>
          </li>
        </ul>
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

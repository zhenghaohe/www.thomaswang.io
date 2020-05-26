import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { connect } from "react-redux"
import "what-input"

import { rhythm, scale } from "../utils/typography"
import ThemeSwitch from "../components/ThemeSwitch"

const Back = styled.p`
  font-family: "Permanent Marker", cursive;
  font-size: 1rem;
  margin: 0;
`

const TheH2 = styled.h2`
  font-family: "Pacifico", cursive;
  margin: 0 auto 3rem;
  text-align: center;

  @media all and (max-width: 767px) {
    margin: 0 auto 2rem;
  }
`

const StyledH2Link = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: ${props =>
    props.darkMode ? "rgba(255, 255, 255, 0.8)" : "rgb(55, 53, 47)"};
  transition: none;

  &:hover {
    opacity: 0.8;
  }
`

const InnerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.maxWidth || rhythm(24)};
  padding: 2.75rem 1rem 0;

  @media all and (max-width: 767px) {
    padding: 1rem 1rem 0;
  }
`

const PageWrapper = props => {
  const { location, children } = props
  const blogPath = `${__PATH_PREFIX__}/blog/`
  let header

  const darkMode = props.isDarkMode
  const fillColor = darkMode ? "rgb(255, 255, 255)" : "rgb(4, 4, 2)"
  const labelColor = darkMode ? "rgba(255, 255, 255, 0.8)" : "rgb(55, 53, 47)"

  if (location.pathname === blogPath) {
    header = (
      <>
        <Back>
          <Link to="/">← Home</Link>
        </Back>
        <h1
          title="cool blog"
          style={{
            ...scale(1.3),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            textAlign: "center",
            fontFamily: `'Pacifico', cursive`,
          }}
        >
          c
          <Sunglasses aria-label="sunglasses" viewBox="0 0 298 298" width="65">
            <path
              fill={fillColor}
              d="M290 119.124h-11.278c-4.797-11.502-14.41-20.223-29.945-22.705C236.976 94.532 206 94.124 206 94.124H92s-30.976.408-42.776 2.295c-15.535 2.482-25.148 11.203-29.945 22.705H8a8 8 0 0 0 0 16h7.581c-1.01 14.564 3.189 30.227 10.241 41.856 17.558 28.961 55.225 41.261 93.416 1.989 12.123-12.463 18.024-22.889 20.906-33.377 0 0 .498-2.466.762-3.29 1.094-3.42 4.271-6.179 8.011-6.179h.166c3.649 0 6.763 2.675 7.928 5.972.316.898.808 3.292.822 3.347 2.874 10.514 8.776 21.131 20.929 33.625 38.191 39.27 75.858 26.833 93.416-2.126 7.081-11.679 10.769-27.871 10.073-41.817H290a8 8 0 0 0 0-16zm-132.88 2.42c-2.518-.881-5.222-1.42-8.037-1.42h-.166c-2.815 0-5.519.539-8.037 1.42-1.042-4.254-2.775-7.42-5.15-11.42h26.541c-2.376 4-4.109 7.166-5.151 11.42z"
            />
          </Sunglasses>
          l blog
        </h1>
      </>
    )
  } else if (location.pathname.includes("blog")) {
    header = (
      <TheH2 title="cool blog">
        <StyledH2Link darkMode={darkMode} to={`/blog/`}>
          c
          <Sunglasses2 aria-label="sunglasses" viewBox="0 0 298 298" width="35">
            <path
              fill={labelColor}
              d="M290 119.124h-11.278c-4.797-11.502-14.41-20.223-29.945-22.705C236.976 94.532 206 94.124 206 94.124H92s-30.976.408-42.776 2.295c-15.535 2.482-25.148 11.203-29.945 22.705H8a8 8 0 0 0 0 16h7.581c-1.01 14.564 3.189 30.227 10.241 41.856 17.558 28.961 55.225 41.261 93.416 1.989 12.123-12.463 18.024-22.889 20.906-33.377 0 0 .498-2.466.762-3.29 1.094-3.42 4.271-6.179 8.011-6.179h.166c3.649 0 6.763 2.675 7.928 5.972.316.898.808 3.292.822 3.347 2.874 10.514 8.776 21.131 20.929 33.625 38.191 39.27 75.858 26.833 93.416-2.126 7.081-11.679 10.769-27.871 10.073-41.817H290a8 8 0 0 0 0-16zm-132.88 2.42c-2.518-.881-5.222-1.42-8.037-1.42h-.166c-2.815 0-5.519.539-8.037 1.42-1.042-4.254-2.775-7.42-5.15-11.42h26.541c-2.376 4-4.109 7.166-5.151 11.42z"
            />
          </Sunglasses2>
          l blog
        </StyledH2Link>
      </TheH2>
    )
  } else {
    header = null
  }

  return (
    <Wrapper>
      <InnerWrapper maxWidth={props.maxWidth}>
        <header>{header}</header>
        <main>{children}</main>
      </InnerWrapper>
      <ThemeSwitch />
      <Footer>
        © 2019 - {new Date().getFullYear()}, Thomas Wang.{" "}
        <a href="https://github.com/thomaswang/www.thomaswang.io">
          Source code
        </a>
        .
      </Footer>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(PageWrapper)

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 0.9375rem;
  text-align: center;
  margin: 16px auto 72px;
`

const Sunglasses = styled.svg`
  margin: 0 4px;
  transform: translateY(20px);

  path {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const Sunglasses2 = styled.svg`
  margin: 0 2px;
  transform: translateY(10px);

  path {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

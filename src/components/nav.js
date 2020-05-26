import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"

import { rhythm } from "../utils/typography"

const StyledNav = styled.nav`
  font-family: "Permanent Marker", cursive;
  box-sizing: border-box;
  cursor: pointer;
  margin: 1rem 0.5rem;
  display: flex;
  justify-content: center;

  a {
    box-shadow: none;
  }
`

const StyledContainer = styled.div`
  display: inline-block;
  background-color: transparent;
  color: ${props => (props.darkMode ? "white" : "black")};
  border: 2px solid ${props => (props.darkMode ? "white" : "black")};
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 0.25rem ${rhythm(1)};

  &:hover {
    background-color: ${props => (props.darkMode ? "white" : "black")};
    color: ${props =>
      props.darkMode ? "rgb(55, 53, 47)" : "rgba(255, 255, 255, 0.9)"};
  }

  @media all and (max-width: 500px) {
    font-size: 12px;
  }
`

const StyledLeftContainer = styled(StyledContainer)`
  background-color: ${props => props.focused && props.theme.headerNav};
  color: ${props => props.focused && props.theme.oppText};
  border-right-style: none;
  border-radius: 25px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

const StyledMiddleContainer = styled(StyledContainer)`
  background-color: ${props => props.focused && props.theme.headerNav};
  color: ${props => props.focused && props.theme.oppText};
  border-left-style: none;
  border-right-style: none;
  border-radius: 0;
`

const StyledRightContainer = styled(StyledContainer)`
  background-color: ${props => props.focused && props.theme.headerNav};
  color: ${props => props.focused && props.theme.oppText};
  border-left-style: none;
  border-radius: 25px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

const Breaker = styled.div`
  height: inherit;
  width: 2px;
  background: ${props => (props.darkMode ? "white" : "black")};
`

const Nav = props => {
  const darkMode = props.isDarkMode
  let homeFocused = false
  let projectsFocused = false
  let aboutFocused = false

  if (props.focused === "home") {
    homeFocused = true
  } else if (props.focused === "projects") {
    projectsFocused = true
  } else if (props.focused === "about") {
    aboutFocused = true
  }

  return (
    <StyledNav>
      <Link to="/">
        <StyledLeftContainer focused={homeFocused} darkMode={darkMode}>
          Home
        </StyledLeftContainer>
      </Link>
      <Breaker darkMode={darkMode} />
      <Link to="/projects/">
        <StyledMiddleContainer focused={projectsFocused} darkMode={darkMode}>
          Projects
        </StyledMiddleContainer>
      </Link>
      <Breaker darkMode={darkMode} />
      <Link to="/about/">
        <StyledRightContainer focused={aboutFocused} darkMode={darkMode}>
          About
        </StyledRightContainer>
      </Link>
    </StyledNav>
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(Nav)

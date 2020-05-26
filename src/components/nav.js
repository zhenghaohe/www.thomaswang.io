import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Nav = props => {
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
        <StyledLeftContainer focused={homeFocused}>Home</StyledLeftContainer>
      </Link>
      <Breaker />
      <Link to="/projects/">
        <StyledMiddleContainer focused={projectsFocused}>
          Projects
        </StyledMiddleContainer>
      </Link>
      <Breaker />
      <Link to="/about/">
        <StyledRightContainer focused={aboutFocused}>
          About
        </StyledRightContainer>
      </Link>
    </StyledNav>
  )
}

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

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`

const StyledContainer = styled.div`
  display: inline-block;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.headerNav};
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 0.25rem ${rhythm(1)};

  &:hover {
    background-color: ${({ theme }) => theme.headerNav};
    color: ${({ theme }) => theme.oppText};
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
  background: ${({ theme }) => theme.headerNav};
`

export default Nav

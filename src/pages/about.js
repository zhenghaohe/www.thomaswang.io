import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import Skeleton from "react-loading-skeleton"

import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import Nav from "../components/nav"
import {
  Container,
  BlogViews,
  Github,
  Youtube,
  Tiktok,
  Unsplash,
} from "../components/stats"

const P = styled.p`
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 2rem 0 4rem;
  padding: 0 1rem;
`

const LandscapeContainer = styled.a`
  display: block;
  position: relative;
  padding: 0 1rem;
  width: 100%;
  box-shadow: none;
`

const Landscape = styled.div`
  position: relative;
  margin: 3rem auto 0;
  width: 100%;
  cursor: pointer;

  span {
    width: 100%;

    &::after {
      padding-top: 56.25%;
      display: block;
      content: "";
    }

    > span {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }

  img {
    width: 100%;
    vertical-align: top;
    margin: 0;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.5s;
  }

  &::after {
    content: "source: my landscape collection";
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 0.875rem;
    color: #fff;
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
    }
  }
`

const About = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const { isDarkMode } = props

  const [loaded, setLoaded] = useState(false)

  function onLoad() {
    setLoaded(true)
  }

  return (
    <PageWrapper location={props.location} title={siteTitle}>
      <SEO title="About / Thomas Wang" url="https://www.thomaswang.io/about/" />
      <Nav focused="about" />
      <LandscapeContainer href="https://unsplash.com/collections/10605932/landscapes">
        <Landscape>
          {!loaded && <Skeleton height="100%" width="100%" />}
          <img
            style={{ display: loaded ? "block" : "none" }}
            onLoad={onLoad}
            src="https://source.unsplash.com/collection/10605932/1600x900"
            alt=""
          />
        </Landscape>
      </LandscapeContainer>
      <P>
        Hey, I'm <b>Thomas Wang</b>, and you've stumbled upon my about page!
        Truthfully, I don't have all that much to say about myself, other than I
        am trying to figure out this whole life thing just like everybody else.{" "}
        {/* I'm currently pursuing a{" "}
        <a href="https://camd.northeastern.edu/program/computer-science-and-design/">
          BS in Design and Computer Science
        </a>
        .  */}
        I'm interested in <i>ethics</i>, <i>minimalism</i>, <i>technology</i>,
        and <i>human potential</i>.
      </P>
      <h2 id="stats" style={{ textAlign: "center" }}>
        <a href="#stats" style={{ boxShadow: "none" }}>
          Internet <q>Brag</q> Stats
        </a>
      </h2>

      <Container>
        <BlogViews darkMode={isDarkMode} />
        <Github darkMode={isDarkMode} />
        <Youtube darkMode={isDarkMode} />
        <Tiktok darkMode={isDarkMode} />
        <Unsplash darkMode={isDarkMode} />
      </Container>
    </PageWrapper>
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(About)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

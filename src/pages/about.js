import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { connect } from "react-redux"

import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import Nav from "../components/nav"
import { Container, Youtube, Tiktok, Unsplash } from "../components/stats"

const P = styled.p`
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 5rem 0 4.5rem;
  padding: 0 1rem;

  @media all and (max-width: 650px) {
    padding: 0 2rem;
  }
`

const About = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const { isDarkMode } = props

  return (
    <PageWrapper location={props.location} title={siteTitle}>
      <SEO title="About / Thomas Wang" url="https://www.thomaswang.io/about/" />
      <Nav focused="about" />
      <P>
        You've stumbled onto my about page! Truthfully, I don't have much to say
        about myself, other than I am figuring out this whole life thing just
        like everybody else.{" "}
        {/* I'm currently pursuing a{" "}
        <a href="https://camd.northeastern.edu/program/computer-science-and-design/">
          BS in Design and Computer Science
        </a>
        .  */}
        I'm interested in <i>ethics</i>, <i>minimalism</i>, <i>technology</i>,
        and <i>human potential</i>.
      </P>
      <h2 name="stats" style={{ textAlign: "center" }}>
        Personal Stats
      </h2>
      <Container>
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

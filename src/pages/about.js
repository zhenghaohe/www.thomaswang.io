import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

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

  return (
    <PageWrapper location={props.location} title={siteTitle}>
      <SEO title="About / Thomas Wang" url="https://www.thomaswang.io/about/" />
      <Nav focused="about" />
      <P>
        You've stumbled onto my about page! Truthfully, I don't have much to say
        about myself, other than I am figuring out this whole life thing just
        like everyone else.{" "}
        {/* I'm currently pursuing a{" "}
        <a href="https://camd.northeastern.edu/program/computer-science-and-design/">
          BS in Design and Computer Science
        </a>
        .  */}
        I'm interested in ethics, minimalism, technology, and human potential.
      </P>
      <h2 style={{ textAlign: "center" }}>Personal Stats</h2>
      <Container>
        <Youtube />
        <Tiktok />
        <Unsplash />
      </Container>
    </PageWrapper>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

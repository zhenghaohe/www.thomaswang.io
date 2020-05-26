import React from "react"
import { graphql } from "gatsby"

import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import Nav from "../components/nav"

const About = props => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <PageWrapper location={props.location} title={siteTitle}>
      <SEO title="About / Thomas Wang" url="https://www.thomaswang.io/about/" />
      <Nav focused="about" />
      <p style={{ margin: "5rem auto", textAlign: "center" }}>
        about page under construction.
      </p>
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

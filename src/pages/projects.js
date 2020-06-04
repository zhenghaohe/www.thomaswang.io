import React from "react"
import { graphql } from "gatsby"

import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"
import Nav from "../components/nav"

const Projects = props => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <PageWrapper location={props.location} title={siteTitle}>
      <SEO
        title="Projects / Thomas Wang"
        url="https://www.thomaswang.io/projects/"
      />
      <Nav focused="projects" />
      <p
        className="systemfont"
        style={{ margin: "10rem auto", textAlign: "center" }}
      >
        <span style={{ fontStyle: "italic" }}>In progress</span>.
        <br />
        <br />
        See my open source projects at{" "}
        <a href="https://dev.thomaswang.io">dev.thomaswang.io.</a>
      </p>
    </PageWrapper>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

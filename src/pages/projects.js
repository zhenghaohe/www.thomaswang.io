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
      <p style={{ margin: "5rem auto", textAlign: "center" }}>projects tbd.</p>
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

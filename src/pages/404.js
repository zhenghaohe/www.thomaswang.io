import React from "react"
import { Link, graphql } from "gatsby"

import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"

const NotFoundPage = props => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <PageWrapper location={location} title={siteTitle}>
      <SEO title="404: Not Found / Thomas Wang" />
      <h1>Not Found</h1>
      <p>
        <span role="img" aria-label="triple shrug" title="shrug">
          🤷‍♂️🤷‍♂🤷‍♂
        </span>
      </p>
      <Link to="/">Home</Link>・<Link to="/blog/">Blog</Link>
    </PageWrapper>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

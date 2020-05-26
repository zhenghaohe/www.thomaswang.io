import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"

const StyledIframe = styled.iframe`
  width: 100vw;
  height: 100vh;
  border: 0;
`

export default () => (
  <>
    <SEO
      title="Analytics / Thomas Wang"
      url="https://www.thomaswang.io/analytics/"
    />
    <StyledIframe
      src="https://datastudio.google.com/embed/reporting/82290137-c6dc-4b66-84a6-fed5af31980e/page/KthH"
      frameborder="0"
      allowfullscreen
    ></StyledIframe>
  </>
)

import React, { useEffect } from "react"
import { connect } from "react-redux"

const Comments = props => {
  const commentTheme = props.isDarkMode ? "photon-dark" : "github-light"

  useEffect(() => {
    if (typeof document !== "undefined") {
      let script = document.createElement("script")
      let anchor = document.getElementById("inject-comments-for-uterances")
      script.setAttribute("src", "https://utteranc.es/client.js")
      script.setAttribute("repo", "thomaswang/blog-comments")
      script.setAttribute("issue-term", "pathname")
      script.setAttribute("theme", commentTheme)
      script.setAttribute("crossorigin", "anonymous")
      script.setAttribute("async", true)
      anchor.appendChild(script)

      return () => {
        anchor.innerHTML = ""
      }
    }
  })

  return <section id="inject-comments-for-uterances"></section>
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(Comments)

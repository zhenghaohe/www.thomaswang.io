import React, { useEffect } from "react"
import { connect } from "react-redux"
import { ThemeProvider } from "styled-components"

import { theme } from "../theme"
import { GlobalStyles } from "../global"
import { prefersDarkMode } from "../utils/prefersDarkMode"
import "./layout.css"

const Layout = props => {
  useEffect(() => {
    const isDarkMode = prefersDarkMode()

    if (isDarkMode) {
      props.setDark()
    }
  }, [props])

  const darkMode = prefersDarkMode()
  const userTheme = theme(darkMode || props.isDarkMode)

  return (
    <ThemeProvider theme={userTheme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

const mapDispatchToProps = dispatch => {
  return {
    setDark: () => dispatch({ type: "SET_DARK" }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

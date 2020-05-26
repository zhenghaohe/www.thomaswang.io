import React from "react"
import CustomLayout from "./wrapPageElement"
import wrapWithProvider from "./wrapWithProvider"

function setColorTheme() {
  let prefersDarkMode = false
  if (typeof window !== "undefined") {
    let noLocalStorageDarkMode =
      window.localStorage.getItem("isDarkMode") === null
    let darkModeLocal = window.localStorage.getItem("isDarkMode") === "true"
    if (
      (noLocalStorageDarkMode &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      darkModeLocal === true
    ) {
      prefersDarkMode = true
    }
  }

  if (prefersDarkMode) {
    let root = document.documentElement
    root.style.setProperty("--bg-color", "#16191f")
  }
}

const MagicScriptTag = () => {
  const boundFn = String(setColorTheme)
  let calledFunction = `(${boundFn})()`

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}

export const wrapPageElement = CustomLayout
export const wrapRootElement = wrapWithProvider

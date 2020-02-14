export const prefersDarkMode = () => {
  if (typeof document !== "undefined") {
    const html = document.getElementsByTagName("html")[0]
    html.className = html.className.replace(/\bno-js\b/, "has-js")
  }

  // Set dark mode preference
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

  return prefersDarkMode
}

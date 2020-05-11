export const lightTheme = {
  theme: "light",
  body: "#fffefc",
  headings: "rgb(4, 4, 2)",
  text: "rgb(55, 53, 47)",
  labels: "rgba(55, 53, 47, 0.6)",
  codeHighlight: "rgba(135,131,120,0.15)",

  buttonBackground: "black",

  cardBackground: "#fdfdfd",
  cardText: "#2b2a35",
  cardBorder: "#f6f6f9",
  cardBoxShadow: "0 10px 20px rgba(146, 142, 125, 0.2)",
  cardBoxShadowHover:
    "0 4px 4px rgba(103, 110, 144, 0.05), 0 2px 2px rgba(103, 110, 144, 0.05)",
  cardBoxBorder:
    "0 7px 25px 0 rgba(0, 0, 0, 0.03), 0 4px 12px 0 rgba(0, 0, 0, 0.03)",

  livePreviewBackground: "white",
}

export const darkTheme = {
  theme: "dark",
  body: "#232629",
  headings: "rgb(255, 255, 255)",
  text: "rgba(255, 255, 255, 0.9)",
  labels: "rgba(255, 255, 255, 0.6)",
  codeHighlight: "rgba(135,131,120,0.15)",

  buttonBackground: "#26bcfb",

  cardBackground: "#292c2f",
  cardText: "#B1B1B5",
  cardBorder: "#2D2D2E",
  cardBoxShadow: "0 20px 40px rgba(0,0,0,.25)",
  cardBoxShadowHover: "0 4px 4px rgba(0,0,0,.25), 0 2px 2px rgba(0,0,0,.25)",
  cardBoxBorder:
    "0 7px 25px 0 rgba(255, 255, 255, 0.03), 0 4px 12px 0 rgba(255, 255, 255, 0.03)",

  livePreviewBackground: "rgb(1, 22, 39)",
}

export const theme = isDarkMode => {
  const currentTheme = isDarkMode ? "dark" : "light"

  const allThemes = {
    light: {
      ...lightTheme,
    },
    dark: {
      ...darkTheme,
    },
  }

  return allThemes[currentTheme] || allThemes.light
}

// Types
export const TOGGLE_THEME = `TOGGLE_THEME`
export const SET_DARK = `SET_DARK`

// Actions
export const toggleTheme = isDarkMode => ({
  type: TOGGLE_THEME,
  isDarkMode,
})

export const setDark = isDarkMode => ({
  type: SET_DARK,
  isDarkMode,
})

import { combineReducers } from "redux"
import { TOGGLE_THEME, SET_DARK } from "./actions"

// Initial State
const initialState = {
  isDarkMode: false,
}

// Reducers
const theme = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      if (typeof window !== "undefined") {
        let root = document.documentElement

        if (state.isDarkMode) {
          window.localStorage.setItem("isDarkMode", "false")
          root.style.setProperty("--bg-color", "#fffefc")
        } else {
          window.localStorage.setItem("isDarkMode", "true")
          root.style.setProperty("--bg-color", "#232629")
        }
      }

      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      }
    case SET_DARK:
      if (typeof window !== "undefined") {
        window.localStorage.setItem("isDarkMode", "true")

        let root = document.documentElement
        root.style.setProperty("--bg-color", "#232629")
      }

      return {
        ...state,
        isDarkMode: true,
      }
    default:
      return state
  }
}

export default combineReducers({ theme })

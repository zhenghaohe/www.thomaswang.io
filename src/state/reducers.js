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
        if (state.isDarkMode) {
          window.localStorage.setItem("isDarkMode", "false")
        } else {
          window.localStorage.setItem("isDarkMode", "true")
        }
      }

      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      }
    case SET_DARK:
      if (typeof window !== "undefined") {
        window.localStorage.setItem("isDarkMode", "true")
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

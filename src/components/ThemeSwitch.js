import React from "react"
import { connect } from "react-redux"
import Switch from "react-switch"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const ThemeSwitch = ({ isDarkMode, toggleTheme }) => {
  const darkMode = isDarkMode

  const labelColor = isDarkMode
    ? "rgba(255, 255, 255, 0.4)"
    : "rgba(55, 53, 47, 0.4)"

  return (
    <SwitchContainer>
      <label
        htmlFor="theme-switcher"
        style={{
          marginRight: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={labelColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{ fill: "none" }}
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </label>
      <Switch
        id="theme-switcher"
        onChange={() => toggleTheme()}
        checked={darkMode}
        onColor="#F246AE"
        offColor="#D4D4CE"
        onHandleColor="#FFFFFF"
        offHandleColor="#FFFFFF"
        uncheckedIcon={false}
        checkedIcon={false}
        height={45}
        width={80}
        handleDiameter={34}
        role="checkbox"
        aria-checked={darkMode}
        aria-label="toggle theme"
      />
      <label
        htmlFor="theme-switcher"
        style={{
          marginLeft: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={labelColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{ fill: "none" }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </SwitchContainer>
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitch)

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${rhythm(2)};
  margin-bottom: ${rhythm(2)};
`

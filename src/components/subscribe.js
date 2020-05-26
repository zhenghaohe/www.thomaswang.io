import React from "react"
import SubscribeCard from "react-subscribe-card"
import { connect } from "react-redux"

const Subscribe = props => {
  const lightTheme = !props.isDarkMode
  const darkTheme = props.isDarkMode
  const background = lightTheme ? "#ffffff" : "#13161f"
  const border = lightTheme ? "#F5F5F5" : "#13161f"
  const inputBackground = lightTheme ? "#f5f5f5" : "#0e1013"
  const inputBackgroundFocus = lightTheme ? "#fff" : "#000"
  const inputPlaceholder = darkTheme && "rgba(255, 255, 255, 0.6)"
  const inputText = darkTheme && "white"
  const button = "#26bcfb"

  const outerCardStyle = `
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding: 0;
    background-color: ${border};
    border-radius: 4px;
    border: 4px solid ${border};
    border-top-width: 0;
    border-bottom-width: 0;
    &::before {
      content: '';
      width: 100%;
      height: 4px;
      display: block;
      background-image: repeating-linear-gradient(135deg, #FE5A54 0px, #FE5A54 15px, transparent 15px, transparent 25px, #3FA9F4 25px, #3FA9F4 40px, transparent 40px, transparent 50px);
      border-radius: 4px 4px 0 0;
    }
    &::after {
      content: '';
      width: 100%;
      height: 4px;
      display: block;
      background-image: repeating-linear-gradient(135deg, #FE5A54 0px, #FE5A54 15px, transparent 15px, transparent 25px, #3FA9F4 25px, #3FA9F4 40px, transparent 40px, transparent 50px);
      border-radius: 0 0 4px 4px;
    }
  `

  const innerCardStyle = `
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: ${background};
    padding: 40px;
  `

  const titleStyle = `
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  `

  const descriptionStyle = `
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 0.95rem;
    font-weight: 400
  `

  const subContainerStyle = `
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin-top: 24px;
  `

  const subInputStyle = `
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    box-sizing: border-box;
    background-color: ${inputBackground};
    border: 0;
    border-radius: 3px;
    margin-right: 8px;
    color: ${inputText}

    &:focus {
      background-color: ${inputBackgroundFocus};
      box-shadow: 0 0 0 1px #f093fb;
      outline: 0px;
    }

    &::placeholder {
      color: ${inputPlaceholder};
      font-weight: 500;
    }
  `

  const subButtonStyle = `
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    border-radius: 3px;
    background-color: ${button};
  `

  return (
    <section className="subscribe-section" style={props.style}>
      <SubscribeCard
        tinyletterUsername="thomaswang"
        description="I'll send you my latest blog posts by email. Also, you'll be the first to hear about new things I'm working on!"
        outerCardStyle={outerCardStyle}
        innerCardStyle={innerCardStyle}
        titleStyle={titleStyle}
        descriptionStyle={descriptionStyle}
        subContainerStyle={subContainerStyle}
        subInputStyle={subInputStyle}
        subButtonStyle={subButtonStyle}
        emailPlaceholder="example@youdabomb.com"
      />
    </section>
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(Subscribe)

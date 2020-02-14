import React from "react"
import { connect } from "react-redux"
import { TwitterTweetEmbed } from "react-twitter-embed"

const Tweet = props => {
  const theme = props.isDarkMode ? "dark" : "light"

  return (
    <TwitterTweetEmbed tweetId={props.tweetId} options={{ theme: theme }} />
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.theme.isDarkMode,
})

export default connect(mapStateToProps)(Tweet)

import React from "react"
import styled from "styled-components"
import useSWR from "swr"
import format from "comma-number"
import millify from "millify"

import fetcher from "../utils/fetcher"
import Spinner from "./spinner"

const formatBig = number => {
  return millify(number, {
    precision: 3,
    lowerCase: true,
  })
}

export const Container = styled.div`
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  line-height: 1.82;
  margin: 2rem 1rem 5rem;

  @media all and (max-width: 650px) {
    margin: 2rem 2rem 4rem;
  }
`

const Card = styled.a`
  display: block;
  position: relative;
  background: ${props => props.theme.cardBackground};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.cardBorder};
  box-shadow: ${props => props.theme.cardBoxShadow};
  will-change: transform;
  color: ${props => props.theme.cardText};
  transition: box-shadow 0.2s ease;
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 48%;

  &:hover {
    box-shadow: ${props => props.theme.cardBoxShadowHover};
  }

  &::before {
    box-shadow: ${props => props.theme.cardBoxBorder};
  }

  @media all and (max-width: 650px) {
    width: 100%;
    padding: 2.5rem 1rem;
  }
`

const Label = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.5rem;
    margin-bottom: 2px;
  }
`

const Count = styled.div`
  font-weight: 600;
  font-size: 2rem;
  color: ${props => (props.darkMode ? "white" : "black")};
`

const StatUI = props => <Card href={props.link}>{props.children}</Card>

const YoutubeLogo = () => (
  <svg
    height="16"
    width="16"
    viewBox="0 -77 512.00213 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
      fill="#f00"
    />
    <path
      d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
      fill="#fff"
    />
  </svg>
)

export const Youtube = props => {
  const { data } = useSWR(
    "https://us-central1-thomas-wang.cloudfunctions.net/youtube",
    fetcher
  )

  let subscriberCount = data?.subscriberCount
  let viewCount = data?.viewCount

  if (data) {
    if (subscriberCount < 1000000) {
      subscriberCount = format(subscriberCount)
    } else {
      subscriberCount = formatBig(subscriberCount)
    }

    if (viewCount < 1000000) {
      viewCount = format(viewCount)
    } else {
      viewCount = formatBig(viewCount)
    }
  }

  const link = "https://t.wang.sh/youtube"

  return (
    <>
      <StatUI link={link}>
        <Label>
          <YoutubeLogo /> YouTube Subscribers
        </Label>
        <Count darkMode={props.darkMode}>
          {subscriberCount || <Spinner scale="0.4" />}
        </Count>
      </StatUI>
      <StatUI link={link}>
        <Label>
          <YoutubeLogo /> YouTube Views
        </Label>
        <Count darkMode={props.darkMode}>
          {viewCount || <Spinner scale="0.4" />}
        </Count>
      </StatUI>
    </>
  )
}

const TiktokLogo = () => (
  <svg
    enable-background="new 0 0 512 512"
    height="14"
    width="14"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#f00044">
      <path d="m182.1 265.4c-40.6 0-73.4 32.8-72.8 73 .4 25.8 14.6 48.2 35.5 60.7-7.1-10.9-11.3-23.8-11.5-37.7-.6-40.2 32.2-73 72.8-73 8 0 15.7 1.3 22.9 3.6v-80.5c-7.5-1.1-15.2-1.7-22.9-1.7-.4 0-.7 0-1.1 0v59.2c-7.2-2.3-14.9-3.6-22.9-3.6z" />
      <path d="m357.6 24h-.6-20.8c6 30.1 22.9 56.3 46.5 74.1-15.5-20.5-24.9-46.1-25.1-74.1z" />
      <path d="m480 146.5c-7.9 0-15.5-.8-23-2.2l-123 15.8-129 326.1c-7.5 1.1-15.2 1.7-22.9 1.7-34.2 0-66.8-11.1-93.3-31.6 3 3.6 6.2 7.1 9.7 10.5 28.8 28.4 67 44.1 107.7 44.1 7.7 0 15.4-.6 22.9-1.7 32-4.7 61.5-19.4 84.8-42.4 28.6-28.3 44.4-65.8 44.6-105.8l-1.5-177.9c13.6 10.5 28.5 19.3 44.6 26 24.9 10.5 51.3 15.9 78.4 15.9" />
    </g>
    <g fill="#08fff9">
      <path d="m98.2 254.1c28.5-28.3 66.4-44 106.8-44.3v-21.3c-7.5-1.1-15.2-1.7-22.9-1.7-40.8 0-79.1 15.7-107.9 44.3-28.3 28.1-44.5 66.5-44.4 106.4 0 40.2 15.9 77.9 44.6 106.4 4.6 4.5 9.3 8.7 14.3 12.5-22.6-26.9-34.9-60.5-35-95.9.1-39.9 16.2-78.3 44.5-106.4z" />
      <path d="m457 144.3v-21.4h-.2c-27.8 0-53.4-9.2-74-24.8 17.9 23.6 44.1 40.4 74.2 46.2z" />
      <path d="m202 432.2c9.5.5 18.6-.8 27-3.5 29-9.5 49.9-36.5 49.9-68.3l.1-119v-217.4h57.2c-1.5-7.5-2.3-15.1-2.4-23h-78.8v217.3l-.1 119c0 31.8-20.9 58.8-49.9 68.3-8.4 2.8-17.5 4.1-27 3.5-12.1-.7-23.4-4.3-33.2-10.1 12.3 19 33.3 31.9 57.2 33.2z" />
    </g>
    <path d="m205 486.2c32-4.7 61.5-19.4 84.8-42.4 28.6-28.3 44.4-65.8 44.6-105.8l-.4-177.9c13.6 10.5 28.5 19.3 44.6 26 24.9 10.5 51.3 15.9 78.4 15.9v-57.7c-30.1-5.8-56.3-22.6-74.2-46.2-23.6-17.8-40.6-44-46.5-74.1h-57.3v217.3l-.1 119c0 31.8-20.9 58.8-49.9 68.3-8.4 2.8-17.5 4.1-27 3.5-24-1.3-44.9-14.2-57.2-33.1-20.9-12.4-35.1-34.9-35.5-60.7-.6-40.2 32.2-73 72.8-73 8 0 15.7 1.3 22.9 3.6v-59.2c-40.4.3-78.3 16-106.8 44.3-28.3 28.1-44.5 66.5-44.4 106.3 0 35.4 12.3 69 35 95.9 26.6 20.5 59.1 31.6 93.3 31.6 7.7.1 15.4-.5 22.9-1.6z" />
  </svg>
)

export const Tiktok = props => {
  const { data } = useSWR(
    "https://us-central1-thomas-wang.cloudfunctions.net/tiktok",
    fetcher
  )

  let followers = data?.followers
  let likes = data?.likes

  if (data) {
    if (followers < 1000000) {
      followers = format(followers)
    } else {
      followers = formatBig(followers)
    }

    if (likes < 1000000) {
      likes = format(likes)
    } else {
      likes = formatBig(likes)
    }
  }

  const link = "https://t.wang.sh/tiktok"

  return (
    <>
      <StatUI link={link}>
        <Label>
          <TiktokLogo /> TikTok Followers
        </Label>
        <Count darkMode={props.darkMode}>
          {followers || <Spinner scale="0.4" />}
        </Count>
      </StatUI>
      <StatUI link={link}>
        <Label>
          <TiktokLogo /> TikTok Likes
        </Label>
        <Count darkMode={props.darkMode}>
          {likes || <Spinner scale="0.4" />}
        </Count>
      </StatUI>
    </>
  )
}

const UnsplashLogo = () => (
  <svg
    style={{ marginBottom: "4px", fill: "currentColor" }}
    height="12"
    width="12"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m10 9v-9h12v9zm12 5h10v18h-32v-18h10v9h12z" />
  </svg>
)

export const Unsplash = props => {
  const { data } = useSWR(
    "https://us-central1-thomas-wang.cloudfunctions.net/unsplash",
    fetcher
  )

  let downloads = data?.downloads
  let views = data?.views

  if (data) {
    if (downloads < 1000000) {
      downloads = format(downloads)
    } else {
      downloads = formatBig(downloads)
    }

    if (views < 1000000) {
      views = format(views)
    } else {
      views = formatBig(views)
    }
  }

  const link = "https://t.wang.sh/unsplash"

  return (
    <>
      <StatUI link={link}>
        <Label>
          <UnsplashLogo />
          Unsplash Views
        </Label>
        <Count darkMode={props.darkMode}>
          {views || <Spinner scale="0.4" />}
        </Count>
      </StatUI>
      <StatUI link={link}>
        <Label>
          <UnsplashLogo />
          Unsplash Downloads
        </Label>
        <Count darkMode={props.darkMode}>
          {downloads || <Spinner scale="0.4" />}
        </Count>
      </StatUI>
    </>
  )
}

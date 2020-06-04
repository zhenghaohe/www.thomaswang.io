import React from "react"
import styled, { keyframes } from "styled-components"
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

const slideRight = keyframes`
  0% {
    transform: translateX(-10rem);
  }
  100% {
    transform: translateX(0);
  }
`

const fadeIn = keyframes`
  0% {
  opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Card = styled.a`
  display: block;
  position: relative;
  background: ${props => (props.darkMode ? "#1a1d25" : "#fdfdfd")};
  border-radius: 10px;
  border: 1px solid ${props => (props.darkMode ? "#15171d" : "#f6f6f9")};
  box-shadow: ${props =>
    props.darkMode
      ? "0 20px 40px rgba(0,0,0,.25)"
      : "0 10px 20px rgba(146, 142, 125, 0.2)"};
  will-change: transform;
  color: ${props => (props.darkMode ? "#B1B1B5" : "#2b2a35")};
  transition: box-shadow 0.2s ease;
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 48%;
  opacity: 0;
  animation: ${slideRight} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards,
    ${fadeIn} 1.5s linear forwards;
  animation-delay: ${props => props.delay};

  &:hover {
    box-shadow: ${props =>
      props.darkMode
        ? "0 4px 4px rgba(0,0,0,.25), 0 2px 2px rgba(0,0,0,.25)"
        : "0 4px 4px rgba(103, 110, 144, 0.05), 0 2px 2px rgba(103, 110, 144, 0.05)"};
  }

  &::before {
    ${props =>
      props.darkMode
        ? "0 7px 25px 0 rgba(255, 255, 255, 0.03), 0 4px 12px 0 rgba(255, 255, 255, 0.03)"
        : "0 7px 25px 0 rgba(0, 0, 0, 0.03), 0 4px 12px 0 rgba(0, 0, 0, 0.03)"};
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

const EyeIcon = () => (
  <svg
    height="18"
    width="18"
    enable-background="new 0 0 512 512"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m256 126.482c112.405 0 205.833 69.333 249.533 113.744 8.623 8.764 8.623 22.784 0 31.547-43.7 44.412-137.128 113.745-249.533 113.745s-205.833-69.333-249.533-113.744c-8.623-8.764-8.623-22.784 0-31.547 43.7-44.412 137.128-113.745 249.533-113.745z"
      fill="#d1eff2"
    />
    <circle cx="256" cy="256" fill="#76b7eb" r="129.52" />
    <path
      d="m188.989 145.145c-37.467 22.697-62.507 63.851-62.507 110.855 0 71.531 57.987 129.518 129.518 129.518 30.896 0 59.259-10.824 81.521-28.879-196.872 47.794-211.039-141.103-148.532-211.494z"
      opacity=".1"
    />
    <circle cx="256" cy="256" fill="#38648c" r="63.45" />
    <circle cx="318.2" cy="222.06" fill="#fff" r="29.963" />
    <path
      d="m11.028 235.683c43.471-26.842 140.538-82.695 244.972-82.695s201.501 55.853 244.972 82.695c-45.421-44.435-136.331-109.2-244.972-109.2s-199.551 64.765-244.972 109.2z"
      opacity=".15"
    />
    <g opacity=".1">
      <path d="m335.722 328.347c-1.663 0-3.337-.55-4.728-1.682l-9.153-7.445c-3.214-2.614-3.699-7.337-1.086-10.551s7.338-3.7 10.551-1.086l9.153 7.445c3.214 2.614 3.699 7.337 1.086 10.551-1.482 1.823-3.644 2.768-5.823 2.768z" />
      <path d="m354.304 293.475c-.725 0-1.461-.106-2.19-.328l-11.286-3.441c-3.962-1.208-6.194-5.399-4.986-9.361s5.397-6.192 9.361-4.986l11.286 3.441c3.962 1.208 6.194 5.399 4.986 9.361-.986 3.233-3.958 5.314-7.171 5.314z" />
      <path d="m246.549 365.833c-.231 0-.464-.011-.699-.032-4.124-.381-7.159-4.034-6.777-8.159l1.086-11.749c.381-4.125 4.035-7.149 8.158-6.778 4.124.381 7.159 4.034 6.777 8.159l-1.086 11.749c-.36 3.89-3.629 6.81-7.459 6.81z" />
      <path d="m156.446 289.026c-3.344 0-6.392-2.252-7.26-5.64-1.029-4.012 1.39-8.099 5.402-9.127l11.43-2.93c4.017-1.027 8.1 1.391 9.127 5.403 1.029 4.012-1.39 8.099-5.402 9.128l-11.43 2.93c-.624.159-1.25.236-1.867.236z" />
      <path d="m207.562 186.504c-2.492 0-4.93-1.241-6.354-3.507l-6.284-9.987c-2.206-3.505-1.152-8.136 2.354-10.342 3.504-2.206 8.137-1.153 10.342 2.354l6.284 9.987c2.206 3.505 1.152 8.136-2.354 10.342-1.241.781-2.623 1.153-3.988 1.153z" />
      <path d="m298.113 182.87c-1.171 0-2.357-.274-3.467-.854-3.671-1.918-5.093-6.449-3.175-10.12l5.463-10.458c1.918-3.672 6.45-5.09 10.12-3.176 3.671 1.918 5.093 6.449 3.175 10.12l-5.463 10.459c-1.337 2.562-3.95 4.029-6.653 4.029z" />
    </g>
  </svg>
)

export const BlogViews = props => {
  const { data } = useSWR(
    "https://us-central1-thomas-wang.cloudfunctions.net/totalViews",
    fetcher
  )

  let total = data?.total

  if (data) {
    if (total < 1000000) {
      total = format(total)
    } else {
      total = formatBig(total)
    }
  }

  const link = "https://t.wang.sh/blog"

  return (
    <>
      <Card href={link} darkMode={props.darkMode} delay="0.2s">
        <Label>
          <EyeIcon /> Blog Views
        </Label>
        <Count darkMode={props.darkMode}>
          {total || <Spinner scale="0.4" />}
        </Count>
      </Card>
    </>
  )
}

const StarIcon = () => (
  <svg
    height="14"
    width="14"
    viewBox="0 -10 511.98685 511"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: "4px" }}
  >
    <path
      d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
      fill="#ffc107"
    />
  </svg>
)

export const Github = props => {
  const { data } = useSWR(
    "https://us-central1-thomas-wang.cloudfunctions.net/github",
    fetcher
  )

  let stars = data?.stars

  if (data) {
    if (stars < 1000000) {
      stars = format(stars)
    } else {
      stars = formatBig(stars)
    }
  }

  const link = "https://t.wang.sh/github"

  return (
    <>
      <Card href={link} darkMode={props.darkMode} delay="0.2s">
        <Label>
          <StarIcon /> GitHub Stars
        </Label>
        <Count darkMode={props.darkMode}>
          {stars || <Spinner scale="0.4" />}
        </Count>
      </Card>
    </>
  )
}

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
      <Card href={link} darkMode={props.darkMode} delay="0.2s">
        <Label>
          <YoutubeLogo /> YouTube Subscribers
        </Label>
        <Count darkMode={props.darkMode}>
          {subscriberCount || <Spinner scale="0.4" />}
        </Count>
      </Card>
      <Card href={link} darkMode={props.darkMode} delay="0.2s">
        <Label>
          <YoutubeLogo /> YouTube Views
        </Label>
        <Count darkMode={props.darkMode}>
          {viewCount || <Spinner scale="0.4" />}
        </Count>
      </Card>
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
      <Card href={link} darkMode={props.darkMode} delay="0.4s">
        <Label>
          <TiktokLogo /> TikTok Followers
        </Label>
        <Count darkMode={props.darkMode}>
          {followers || <Spinner scale="0.4" />}
        </Count>
      </Card>
      <Card href={link} darkMode={props.darkMode} delay="0.4s">
        <Label>
          <TiktokLogo /> TikTok Likes
        </Label>
        <Count darkMode={props.darkMode}>
          {likes || <Spinner scale="0.4" />}
        </Count>
      </Card>
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
      <Card href={link} darkMode={props.darkMode} delay="0.6s">
        <Label>
          <UnsplashLogo />
          Unsplash Views
        </Label>
        <Count darkMode={props.darkMode}>
          {views || <Spinner scale="0.4" />}
        </Count>
      </Card>
      <Card href={link} darkMode={props.darkMode} delay="0.6s">
        <Label>
          <UnsplashLogo />
          Unsplash Downloads
        </Label>
        <Count darkMode={props.darkMode}>
          {downloads || <Spinner scale="0.4" />}
        </Count>
      </Card>
    </>
  )
}

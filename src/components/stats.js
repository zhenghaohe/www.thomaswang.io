import React from "react"
import styled from "styled-components"
import useSWR from "swr"
import format from "comma-number"
import millify from "millify"

import fetcher from "../utils/fetcher"

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
`

const Count = styled.div`
  font-weight: 600;
  font-size: 2rem;
`

const StatUI = props => <Card href={props.link}>{props.children}</Card>

export function Youtube() {
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
        <Label>YouTube Subscribers</Label>
        <Count>{subscriberCount || "-"}</Count>
      </StatUI>
      <StatUI link={link}>
        <Label>YouTube Views</Label>
        <Count>{viewCount || "-"}</Count>
      </StatUI>
    </>
  )
}

export function Tiktok() {
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
        <Label>TikTok Followers</Label>
        <Count>{followers || "-"}</Count>
      </StatUI>
      <StatUI link={link}>
        <Label>TikTok Likes</Label>
        <Count>{likes || "-"}</Count>
      </StatUI>
    </>
  )
}

export function Unsplash() {
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
        <Label>Unsplash Views</Label>
        <Count>{views || "-"}</Count>
      </StatUI>
      <StatUI link={link}>
        <Label>Unsplash Downloads</Label>
        <Count>{downloads || "-"}</Count>
      </StatUI>
    </>
  )
}

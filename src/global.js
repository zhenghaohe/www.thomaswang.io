import { createGlobalStyle } from "styled-components"

const darkHR = `data:image/svg+xml,%3Csvg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.432617' y='13.8564' width='16' height='1' transform='rotate(-60 0.432617 13.8564)' fill='%2350525B'/%3E%3C/svg%3E%0A`

const lightHR = `data:image/svg+xml,%3Csvg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.567383' y='14.1777' width='16' height='1' transform='rotate(-60 0.567383 14.1777)' fill='%232D2E33'/%3E%3C/svg%3E`

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.highlightText};;
  }
  ::selection {
    background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.highlightText};;
  }

  html, body {
    min-width: 360px;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  h1, h2, h3, h4, h5, h6 {
    scroll-margin-top: 1.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.headings};
  }

  p, a {
    color: ${({ theme }) => theme.text};
  }

  label, label > svg {
    color: ${({ theme }) => theme.labels};
    fill: ${({ theme }) => theme.labels};
  }

  ul, ol {
    margin-left: 1.75rem;
  }

  [data-whatintent="mouse"] input:focus,
  [data-whatintent="mouse"] select:focus,
  [data-whatintent="mouse"] textarea:focus,
  [data-whatintent="mouse"] button:focus,
  [data-whatintent="mouse"] [contenteditable="true"]:focus {
    outline: none;
  }

  .language-text {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    padding: 0.2em 0.4em;
    font-size: 0.94em;
    word-break: break-word;
    background: ${({ theme }) => theme.codeHighlight};
    color: #EB5757;
  }

  blockquote {
    color: ${({ theme }) => theme.text};
    border-left: 3px solid currentColor;
  }

  .react-live-playground div[class*="previewArea"] {
    background-color: ${({ theme }) => theme.livePreviewBackground};
  }
  .react-live-playground div[class*="previewArea"]::before {
    color: ${({ theme }) => theme.text};
  }

  @media all and (max-width: 650px) {
    pre, .react-live-playground{
      width: 100vw;
      transform: translateX(-1rem);
    }
  }

  .twitter-tweet {
    margin: 2rem auto;
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }

  hr {
    position: relative;
    width: 100%;
    max-width: 700px;
    margin: 50px auto;
    border: 0;
    height: 14.36px;
    background-repeat: repeat-x;
    box-sizing: border-box;
    background-position: center;
    background-color: transparent;
    background-image: url("${props =>
      props.theme.theme === "dark" ? darkHR : lightHR}");
  }
`

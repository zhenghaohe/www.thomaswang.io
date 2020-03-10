import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ::-moz-selection {
    background: #F545B2;
  }
  ::selection {
    background: #F545B2;
  }

  body {
    background-color: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text};
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
    scroll-margin-top: 1.5rem;
    color: ${({ theme }) => theme.headings};
  }

  p, a {
    color: ${({ theme }) => theme.text};
  }

  label, label > svg {
    color: ${({ theme }) => theme.labels};
    fill: ${({ theme }) => theme.labels};
  }

  hr {
    background-color: ${({ theme }) => theme.hr};
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

  .twitter-tweet {
    margin: 2rem auto;
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }
`

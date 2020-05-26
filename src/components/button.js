import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props} onClick={props.onClick}>
    {props.children}
  </ButtonWrapper>
)

const ButtonWrapper = styled.button`
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 40px;
  cursor: pointer;
  line-height: 1.82;

  background-color: ${props => props.props.background || "black"};
  color: ${props => props.props.color || "rgb(255, 255, 255)"};
  font-size: ${props => props.props.fontSize || "18px"};
  font-weight: ${props => props.props.fontWeight || "700"};
  border-radius: ${props => props.props.radius || "25px"};

  ${props =>
    props.props.center &&
    `
    margin: auto;
  `}

  ${props =>
    props.props.special &&
    `
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg3IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgMTg3IDU0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mKSI+CjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIxODEiIGhlaWdodD0iNDgiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMTQiLz4KPC9nPgo8cmVjdCB4PSIxMjkiIHk9IjE2IiB3aWR0aD0iMjMiIGhlaWdodD0iNiIgcng9IjMiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8cmVjdCB4PSIxNTYiIHk9IjE2IiB3aWR0aD0iOCIgaGVpZ2h0PSI2IiByeD0iMyIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4zOSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9mIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTg3IiBoZWlnaHQ9IjU0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuNSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=);
    background-size: cover;
    background-position-y: -10px;
    background-position-x: -57px;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background-repeat: no-repeat;
    transition: all 0.1s ease 0s;
    `}

  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`

export default Button

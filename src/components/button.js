import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props} onClick={props.onClick}>
    {props.children}
  </ButtonWrapper>
)

const ButtonWrapper = styled.button`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 40px;
  cursor: pointer;

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

  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`

export default Button

import React from "react"

const Spinner = props => (
  <div
    className="lds-spinner"
    style={{ transform: `scale(${props.scale || 0.5})` }}
  >
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default Spinner

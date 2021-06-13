import React from "react";
import "./button.css";

const Button = (props) => (
  <button className="btn" onClick={props.handleClick}>
    {props.text}
  </button>
);

export default Button;

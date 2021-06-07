import React from "react";
import "./button.css";

const Button = (props) => (
  <button className="btn" href={props.link}>
    {props.text}
  </button>
);

export default Button;

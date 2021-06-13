import React from "react";
import "./input.css";

const Input = (props) => (
  <input type={props.type} onChange={props.handleChange} />
);

export default Input;

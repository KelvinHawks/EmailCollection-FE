import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <button
      type={props.type}
      className={`button ${props.className}`}
      onClick={props.onClick}
      id={props.id}
    >
      {props.children}
    </button>
  );
}

export default Button;

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import GlareHover from "../animations/Glare-hover";

import "./Button.scss";
const Button = ({ title, className, icon, text }) => {
  return (
    <button className={`button ${className ? className : ""}`}>
      <span className="button_lg">
        {icon ? icon : ""}
        <span className="button_sl"></span>
        <span className={`${text ? text : ""} button_text`}>{title}</span>
      </span>
    </button>
  );
};

export default Button;

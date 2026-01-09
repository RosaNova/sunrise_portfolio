import React from "react";
import "./Button.scss";
const Button = ({ title , icon}) => {
  return (
    <button>
      {icon}
  <span> {title}
  </span>
</button>
  );
};

export default Button;

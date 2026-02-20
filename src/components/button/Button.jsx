import React from "react";
import "./Button.scss";
const Button = ({ title, icon, href, className, ...props }) => {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={`btn ${className || ""}`}
      {...props}
    >
      {icon}
      <span>{title}</span>
    </Component>
  );
};

export default Button;

import React from "react";
interface Button {
  title?: string;
}

const Button: React.FC<Button> = ({ title }) => {
  return <button>{title}</button>;
};

export default Button;

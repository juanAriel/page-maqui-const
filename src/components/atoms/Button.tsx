import React from "react";

type ButtonProps = {
  label: string;
  styles?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ styles, label, onClick }) => {
  const classNames = `${label}`;

  return (
    <button className={classNames + styles} onClick={onClick}>
      contactame
    </button>
  );
};

export default Button;

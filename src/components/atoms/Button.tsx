import React from "react";

type ButtonProps = {
  label: string;
  styles?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ styles, label, onClick }) => {
  const classNames = `${label}`;

  return (
    <button className={styles} onClick={onClick}>
      {classNames}
    </button>
  );
};

export default Button;

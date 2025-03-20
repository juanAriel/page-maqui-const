import React, { CSSProperties } from "react";

type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  styles?: CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  onClick,
  styles,
}) => {
  const classNames = `${label}`;

  return (
    <button className={className} onClick={onClick} style={styles}>
      {classNames}
    </button>
  );
};

export default Button;

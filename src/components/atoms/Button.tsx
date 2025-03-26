import React, { CSSProperties } from "react";

type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  styles?: CSSProperties;
  isLoading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  onClick,
  styles,
  isLoading,
  disabled = false,
}) => {
  const classNames = `${label}`;

  return (
    <button
      type="submit"
      className={className}
      onClick={onClick}
      style={styles}
      disabled={isLoading || disabled}
    >
      {classNames}
    </button>
  );
};

export default Button;

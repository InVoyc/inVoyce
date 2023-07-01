import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  btnText?: any;
  className?: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  onClick,
  btnText,
  className,
  id,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      id={id}
    >
      {btnText}
    </button>
  );
};

export default Button;

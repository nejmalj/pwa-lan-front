import React from "react";
import "./PrimaryButton.scss";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  icon?: React.ReactNode;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  variant = "primary",
  icon,
  children,
  ...props
}) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default PrimaryButton;

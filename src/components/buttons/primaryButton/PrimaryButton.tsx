import React from "react";
import "./PrimaryButton.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
}

const PrimaryButton: React.FC<ButtonProps> = ({ variant = "primary", size = "md", icon, children, ...props }) => {
    return (
        <button className={`button ${variant} ${size}`} {...props}>
            {icon && <span>{icon}</span>}
            {children}
        </button>
    );
};

export default PrimaryButton;

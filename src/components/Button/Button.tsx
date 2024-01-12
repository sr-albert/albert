import React from "react";
import "./Button.style.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  chidlren?: React.ReactNode;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label = "Button", ...other }: ButtonProps, ref) => (
    <div className="button-wrapper">
      <button ref={ref} aria-label="Default Button" {...other}>
        {label}
      </button>
    </div>
  )
);

export default Button;

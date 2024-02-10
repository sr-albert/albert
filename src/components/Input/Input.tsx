import React from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  variant?: "primary" | "secondary";
  maxWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, style, ...other }: InputProps, ref) => (
    <div className="input-wrapper">
      {label && (
        <label
          className={name ? `input-label-${name}` : ""}
          htmlFor={`${name ? `input-${name}` : ""}`}
        >
          {label}
        </label>
      )}
      <input ref={ref} name={name} {...other} style={{ ...style }} />

      {error && (
        <p
          className="txt-error-helper"
          style={{
            color: "red",
          }}
        >
          {error.message}
        </p>
      )}
    </div>
  )
);

export default Input;

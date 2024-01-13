import React from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  variant?: "primary" | "secondary";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, ...other }: InputProps, ref) => (
    <div className="input-wrapper">
      {label && (
        <label
          className={name ? `input-label-${name}` : ""}
          htmlFor={`${name ? `input-${name}` : ""}`}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        name={name}
        {...other}
        style={{
          width: "100%",
          border: "1px solid #ffffff",
          borderRadius: "4px",
        }}
      />

      {error && (
        <span
          className="input-error"
          style={{
            color: "red",
          }}
        >
          {error.message}
        </span>
      )}
    </div>
  )
);

export default Input;

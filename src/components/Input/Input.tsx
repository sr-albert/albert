import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: "primary" | "secondary";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, ...other }: InputProps, ref) => (
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
          margin: "0px 0px 1.5rem 0px",
          border: "1px solid #ffffff",
          borderRadius: "4px",
        }}
      />
    </div>
  )
);

export default Input;

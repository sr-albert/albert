import React from "react";
import "./Button.style.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  label?: string;
  chidlren?: React.ReactNode;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label = "Button", isLoading = false, ...other }: ButtonProps, ref) => {
    const [innerLabel, setLabel] = React.useState(label);

    React.useEffect(() => {
      if (isLoading) {
        setLabel("Submitting...");
      } else {
        setLabel(label);
      }
    }, [isLoading, label]);
    return (
      <div className="button-wrapper">
        <button
          ref={ref}
          aria-label="Default Button"
          disabled={isLoading}
          style={{
            width: "100%",
            margin: "0px 0px 1.5rem 0px",
            border: "1px solid #ffffff",
            borderRadius: "4px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
          {...other}
        >
          {innerLabel}
        </button>
      </div>
    );
  }
);

export default Button;

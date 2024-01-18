import { useEffect, useState } from "react";

interface SnackbarProps {
  /**
   * Determines whether the snackbar is visible or not.
   */
  visible?: boolean;

  /**
   * Specifies the anchor position of the snackbar.
   */
  anchor?:
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right"
    | "center-center";

  /**
   * The message to be displayed in the snackbar.
   */
  message: string;

  /**
   * Specifies the type of the snackbar.
   */
  type?: "error" | "success" | "warning" | "info" | "default";

  /**
   * The timeout duration for the snackbar to automatically close.
   */
  timeout?: number;

  /**
   * Specifies the animation of the snackbar.
   */
  animation?: "slide" | "fade";
}

export default function Snackbar({
  visible: initialVisible = false,
  message,
  type = "default",
  anchor = "top-left",
  timeout = 3000,
  animation = "slide",
}: SnackbarProps) {
  const returnAnchor = () => {
    switch (anchor) {
      case "bottom-left":
        return {
          bottom: "1rem",
          left: "1rem",
        };
      case "bottom-right":
        return {
          bottom: "1rem",
          right: "1rem",
        };
      case "top-left":
        return {
          top: "1rem",
          left: "1rem",
        };
      case "top-right":
        return {
          top: "1rem",
          right: "1rem",
        };
      case "center-center":
        return {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
      default:
        return {
          top: "1rem",
          left: "1rem",
        };
    }
  };

  const returnStyle = () => {
    switch (type) {
      case "error":
        return {
          backgroundColor: "red",
          color: "white",
        };
      case "success":
        return {
          backgroundColor: "green",
          color: "white",
        };
      case "warning":
        return {
          backgroundColor: "green",
          color: "white",
        };
      case "info":
        return {
          backgroundColor: "blue",
          color: "white",
        };
      default:
        return {
          backgroundColor: "white",
          color: "black",
        };
    }
  };

  const returnAnimClassName = () => {
    let result = "animate__animated ";

    if (animation === "slide") {
      switch (anchor) {
        case "bottom-left":
          result += "animate__slideInUp";
          break;
        case "bottom-right":
          result += "animate__slideInUp";
          break;
        case "top-left":
          result += "animate__slideInDown";
          break;
        case "top-right":
          result += "animate__slideInDown";
          break;
        case "center-center":
          result += "animate__slideInDown";
          break;
        default:
          result += "animate__slideInDown";
          break;
      }
    }

    return result;
  };

  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    setVisible(initialVisible);

    if (initialVisible) {
      const counter = setInterval(() => {
        setVisible(false);
      }, timeout);

      return () => {
        clearInterval(counter);
      };
    }
  }, [initialVisible, timeout]);

  return (
    <div
      style={{
        display: visible ? "block" : "none",
        position: "fixed",
        padding: "0px 1rem",
        borderRadius: "5px",
        ...returnAnchor(),
        ...returnStyle(),
      }}
      className={"snackbar-wrapper" + returnAnimClassName()}
    >
      <p>{message}</p>
    </div>
  );
}

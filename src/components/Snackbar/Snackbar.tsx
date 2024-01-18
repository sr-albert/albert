interface SnackbarProps {
  anchor?:
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right"
    | "center-center";

  message: string;
  type?: "error" | "success" | "warning" | "info" | "default";
}
export default function Snackbar({
  message,
  type = "default",
  anchor = "top-left",
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

  return (
    <div
      style={{
        position: "fixed",
        padding: "0px 1rem",
        borderRadius: "5px",
        ...returnAnchor(),
        ...returnStyle(),
      }}
    >
      <p>{message}</p>
    </div>
  );
}

import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        flexDirection: "column",
      }}
    >
      <NavLink to="/" replace>
        <button>Oopsssssss</button>
      </NavLink>
    </div>
  );
}

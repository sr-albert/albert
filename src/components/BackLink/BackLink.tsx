import { ArrowBackIosNew } from "@mui/icons-material"; 
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  to?: string;
  title?: string;
}
export default function BackLink({ to = "..", title = "Back" }: Props) {
  return (
    <NavLink
      to={to}
      relative="path"
      className="back-link"
      style={{ color: "inherit" }}
    >
      <Button
        startIcon={<ArrowBackIosNew />}
        variant="abtn"
        sx={{
          width: "fit-content",
          margin: "1rem 0",
        }}
      >
        {title}
      </Button>
    </NavLink>
  );
}

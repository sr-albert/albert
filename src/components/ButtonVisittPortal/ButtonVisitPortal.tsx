import { AppContext } from "@/app";
import { Button } from "@mui/material";
import { useContext } from "react";

export default function ButtonVisitPortal() {
  const { portalUrl } = useContext(AppContext);
  const onClick = async () => {
    window.open(portalUrl, "_blank");
  };

  if (!portalUrl) return;

  return (
    <Button variant="abtn-outline" onClick={onClick}>
      Visit My Portal
    </Button>
  );
}

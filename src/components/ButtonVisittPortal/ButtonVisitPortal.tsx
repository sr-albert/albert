import { getConfig } from "@/services/firebase.service";
import { Button } from "@mui/material";
import { useMemo } from "react";

export default function ButtonVisitPortal() {
  const portalUrl = useMemo(async () => {
    const url: string = await getConfig("portalUrl");
    console.log("portalUrl", url);
    return url;
  }, []);

  const onClick = async () => {
    if (portalUrl) window.open(await portalUrl, "_blank");
  };
  return (
    <Button variant="abtn-outline" onClick={onClick}>
      Visit My Portal
    </Button>
  );
}

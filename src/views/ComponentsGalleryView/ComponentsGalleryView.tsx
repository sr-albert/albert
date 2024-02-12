import BackLinkLayout from "@/layouts/backlink.layout";
import { Close } from "@mui/icons-material";
import {
  Backdrop,
  Button,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function ComponentsGalleryView() {
  const [components, setComponents] = useState<string[]>([]);

  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  useEffect(() => {
    const getComponents = async () => {
      const files = await import("../../components");
      const componentName = Object.keys(files);
      setComponents(componentName);
    };

    getComponents();
  }, []);

  const onClick = (component: string) => {
    setSelectedComponent(component);
  };
  const onClose = () => {
    setSelectedComponent(null);
  };
  return (
    <BackLinkLayout>
      <Typography variant="h1">Components Gallery</Typography>
      <Grid container spacing={3} mt={1}>
        {components.map((component, index) => (
          <Grid item xs={3} key={index} display="flex" justifyContent="center">
            <Button
              sx={{
                width: "100%",
                textAlign: "center",
              }}
              onClick={() => onClick(component)}
            >
              <Typography
                variant="h3"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {component}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>

      {selectedComponent && (
        <Backdrop
          open={selectedComponent?.length >= 0}
          className="component-playground"
        >
          <Grid container className="header">
            <Grid item xs={11} display="flex" justifyContent="space-between">
              <Typography variant="h2">{selectedComponent}</Typography>
              <Tooltip title="Close">
                <Button onClick={onClose}>
                  <Close />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Backdrop>
      )}
    </BackLinkLayout>
  );
}

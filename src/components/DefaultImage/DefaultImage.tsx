import { Container, Typography } from "@mui/material";

export default function DefaultImage() {
  return (
    <Container
      disableGutters
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography variant="caption">No Image</Typography>
    </Container>
  );
}

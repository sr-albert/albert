import { Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorView() {
  const error = useRouteError();

  return (
    <Container
      id="error-page"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3">Oops!</Typography>
      <Typography variant="body1">
        Sorry, an unexpected error has occurred.
      </Typography>

      <Typography variant="body2">{String(error)}</Typography>
    </Container>
  );
}

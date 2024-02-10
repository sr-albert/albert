import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigation = useNavigate();

  const onClick = () => {
    navigation("/", {
      replace: true,
    });
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
      maxWidth={false}
    >
      <Typography variant="h1" textAlign="center" sx={{ width: "fit-content" }}>
        Not found
      </Typography>

      <Box width="fit-content">
        <Button
          aria-label="btn-back-to-home"
          onClick={onClick}
          variant="abtn"
          fullWidth={false}
          sx={{
            border: "1px solid",
            "&:hover": {},
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}

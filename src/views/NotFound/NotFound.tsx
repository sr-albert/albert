import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LottieLoader from "@/components/LottieLoader";
import error404 from "@/assets/lottie/lottie-404.json";

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
      <LottieLoader animationData={error404} />

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

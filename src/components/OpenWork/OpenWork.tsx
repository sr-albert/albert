import { Typography } from "@mui/material";
import GlowingBackground from "../GlowingBr/GlowingBr";

export default function OpenWork() {
  return (
    <GlowingBackground
      // onClick={handleDownload}
      sx={{
        cursor: "pointer",
        width: "fit-content",
        margin: {
          mobileS: "1rem auto",
          md: "auto",
        },
      }}
    >
      <Typography
        variant="h6"
        fontWeight="600"
        component="a"
        href={"/tamnguyen-fullstack.pdf"}
        target="_blank"
        sx={{
          color: "inherit",
        }}
      >
        DOWNLOAD CV
      </Typography>
    </GlowingBackground>
  );
}

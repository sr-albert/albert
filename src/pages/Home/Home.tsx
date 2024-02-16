import { ActionBar, ActionBarSocial } from "@/views";
import "./Home.scss";
import OpenWork from "@/components/OpenWork";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div id="home">
      <section id="home-intro" className="force-center">
        <span>
          <Typography variant="h4">Hi there</Typography>
          <Typography variant="h2" fontWeight={800}>
            I am Albert,
          </Typography>
          <Typography variant="h2" fontWeight={800}>
            a software engineer
          </Typography>
          <OpenWork />
        </span>
      </section>

      <ActionBar />
      <ActionBarSocial />
    </div>
  );
}

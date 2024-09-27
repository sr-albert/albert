import { AppContext } from "@/app";
import OpenWork from "@/components/OpenWork";
import { ActionBar, ActionBarSocial } from "@/views";
import { Typography } from "@mui/material";
import { useContext } from "react";
import "./Home.scss";

export default function Home() {
  const { isOpenWork } = useContext(AppContext);

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
          {isOpenWork && <OpenWork />}
        </span>
      </section>

      {/* TODO: Remove comment when finish */}
      {/* <ActionBar /> */}
      <ActionBarSocial />
    </div>
  );
}

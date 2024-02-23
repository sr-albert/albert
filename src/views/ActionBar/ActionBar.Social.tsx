import { AppContext } from "@/app";
import ButtonVisitPortal from "@/components/ButtonVisittPortal";
import { useContext } from "react";
import "./ActionBar.Social.scss";
import ActionBarItem from "./ActionBarItem";
import { ItemProps } from "./item.type";

export default function ActionBarSocial() {
  const { socials } = useContext(AppContext);
  if (!socials) return null;
  return (
    <div className="social-group-container">
      <ButtonVisitPortal />
      {Array.from(socials).map((data, idx) => {
        const { href, isSocial, id } = data as ItemProps;
        // calc the animation delay to make the social icons appear one by one
        const delay = (idx + 1) * 0.5 + "s";
        console.log("delay", delay);
        if (!isSocial) return null;
        return (
          <ActionBarItem
            key={id}
            path={href}
            isSocial={true}
            animationDuration={delay}
          />
        );
      })}
    </div>
  );
}

import { IcComponentsSVG, IcLeetcodeSVG } from "@/assets";
import { Tooltip } from "@mui/material";
import {
  Code,
  Smile as DefaultIcon,
  GitHub,
  Home as HomeIcon,
  Linkedin,
  MessageSquare,
} from "react-feather";
import { NavLink, useMatch } from "react-router-dom";

interface Props {
  path: string | undefined;
  isSocial?: boolean;
}
export default function ActionBarItem({ path, isSocial }: Props) {
  const contactPathMatched = useMatch("/contact");
  const isHighlight = contactPathMatched && isSocial;

  const renderIcon = () => {
    if (isSocial) {
      if (path?.includes("linkedin")) return <Linkedin />;
      if (path?.includes("github")) return <GitHub />;
      if (path?.includes("leetcode"))
        return (
          <img alt="icon leetcode" width={24} height={24} src={IcLeetcodeSVG} />
        );
    }

    switch (path) {
      case "home":
        return <HomeIcon />;
      case "contact":
        return <MessageSquare />;
      case "works":
        return <Code />;
      case "components":
        return (
          <img alt="Components" width={24} height={24} src={IcComponentsSVG} />
        );
      default:
        return <DefaultIcon />;
    }
  };

  const returnClassName = ({
    isActive,
    isPending,
  }: {
    isActive?: boolean;
    isPending?: boolean;
  }) => {
    let className = "action-bar-item";
    if (isHighlight) className += " highlight";
    if (isSocial) className += " social";
    className += isPending ? " pending" : isActive ? " active" : "";
    return className;
  };

  const handleTooltipTitle = (): string => {
    if (path?.toLocaleLowerCase() === "works") {
      return "My Works";
    }

    return path || "";
  };

  const handlePath = (): string => {
    if (isSocial) return path || "#";
    if (path === "") return "#";
    return "/" + path;
  };

  return (
    <NavLink
      id={`action-item-${path}`}
      aria-label={`router to ${path}`}
      to={handlePath()}
      target={isSocial ? "_blank" : "_self"}
      className={returnClassName}
      draggable={false}
    >
      <Tooltip title={handleTooltipTitle()} placement="right">
        {renderIcon()}
      </Tooltip>
    </NavLink>
  );
}

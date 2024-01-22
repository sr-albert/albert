import {
  Code,
  Smile as DefaultIcon,
  GitHub,
  Home as HomeIcon,
  Linkedin,
  MessageSquare,
} from "react-feather";
import { NavLink, useMatch } from "react-router-dom";
import { ItemProps } from "./item.type";

export default function ActionBarItem({
  id,
  href,
  description,
  isSocial,
}: ItemProps) {
  const contactPathMatched = useMatch("/contact");
  const isHighlight = contactPathMatched && isSocial;
  const renderIcon = () => {
    switch (id) {
      case "home":
        return <HomeIcon />;
      case "contact":
        return <MessageSquare />;
      case "linkedin":
        return <Linkedin />;
      case "github":
        return <GitHub />;
      case "works":
        return <Code />;
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

  return (
    <NavLink
      id={`action-item-${id}`}
      aria-label={description}
      to={href}
      target={isSocial ? "_blank" : "_self"}
      className={returnClassName}
      draggable={false}
    >
      {renderIcon()}
    </NavLink>
  );
}

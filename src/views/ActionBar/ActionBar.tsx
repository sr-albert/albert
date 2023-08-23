import {
  Smile as DefaultIcon,
  GitHub,
  Home as HomeIcon,
  Linkedin,
  MessageSquare,
} from "react-feather";
import { NavLink, useMatch } from "react-router-dom";
import "./ActionBar.scss";

interface ItemProps {
  id: string;
  name: string;
  href: string;
  description: string;
  isSocial?: boolean;
}

// Create a list of dummy data to render
const mockActionBar: ItemProps[] = [
  {
    id: "home",
    name: "Home",
    href: "/",
    description: "Home page",
  },
  {
    id: "contact",
    name: "Contact",
    href: "/contact",
    description: "Contact page",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tam-nguyen-6a1576183/",
    description: "Linked profile",
    isSocial: true,
  },
  {
    id: "github",
    name: "Github",
    href: "https://github.com/sr-albert",
    description: "GitHub profile",
    isSocial: true,
  },
];

function Item({ id, name, href, description, isSocial }: ItemProps) {
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
      name={name}
      className={returnClassName}
    >
      {renderIcon()}
    </NavLink>
  );
}

export default function ActionBar() {
  const renderItems = () =>
    mockActionBar.map(
      ({ id, name, href, description, isSocial }: ItemProps) => {
        return (
          <Item
            key={id}
            id={id}
            name={name}
            href={href}
            description={description}
            isSocial={isSocial}
          />
        );
      }
    );

  return (
    <div id="action-bar" className="horizontal">
      {renderItems()}
    </div>
  );
}

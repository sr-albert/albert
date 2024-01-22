import "./ActionBar.scss";
import Item from "./ActionBarItem";
import { ItemProps } from "./item.type";

// Create a list of dummy data to render
export const mockActionBar: ItemProps[] = [
  {
    id: "home",
    name: "Home",
    href: "/",
    description: "Home page",
  },
  // {
  //   id: "contact",
  //   name: "Contact",
  //   href: "/contact",
  //   description: "Contact page",
  // },
  {
    id: "works",
    name: "Works",
    href: "/works",
    description: "Works page",
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

export default function ActionBar() {
  const renderItems = () =>
    mockActionBar.map(
      ({ id, name, href, description, isSocial }: ItemProps) => {
        if (isSocial) return null;

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

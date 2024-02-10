import "./ActionBar.Social.scss";
import ActionBarItem from "./ActionBarItem";
import { ItemProps } from "./item.type";

// Create a list of dummy data to render
const socialMenu: ItemProps[] = [
  {
    id: "leetcode",
    name: "Leetcode",
    href: "https://leetcode.com/sr-albert/",
    description: "Leetcode profile",
    isSocial: true,
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

export default function ActionBarSocial() {
  return (
    <div className="social-group-container">
      {socialMenu.map(({ href, isSocial }: ItemProps) => {
        if (!isSocial) return null;
        return <ActionBarItem path={href} isSocial={true} />;
      })}
    </div>
  );
}

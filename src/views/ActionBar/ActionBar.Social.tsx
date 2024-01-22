import { mockActionBar } from "./ActionBar";
import ActionBarItem from "./ActionBarItem";
import { ItemProps } from "./item.type";
import "./ActionBar.Social.scss";

export default function ActionBarSocial() {
  return (
    <div
      className="social-group-container"
      style={{
        position: "fixed",
        top: "10%",
        right: "5%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {mockActionBar.map(
        ({ id, name, href, description, isSocial }: ItemProps) => {
          if (!isSocial) return null;
          return (
            <ActionBarItem
              key={id}
              id={id}
              name={name}
              href={href}
              description={description}
              isSocial={isSocial}
            />
          );
        }
      )}
    </div>
  );
}

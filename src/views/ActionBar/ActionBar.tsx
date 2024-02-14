import appRoute from "@/routes/app.route";
import { useMemo } from "react";
import "./ActionBar.scss";
import Item from "./ActionBarItem";

export default function ActionBar() {
  const memoizedRoutes = useMemo(() => {
    const routes = appRoute.routes;
    const root = routes[0];

    // const parent = {
    //   path: root.path,
    //   index: root.index,
    //   id: root.id,
    // };

    const appRoutes = root.children;

    const child = appRoutes?.filter((r) => {
      if (!r.path) return false;
      return !r.path.includes("/:"); // children paths without dynamic params
    });

    return child;
  }, []);

  return (
    <div id="action-bar" className="horizontal">
      {/* {renderItems()} */}

      {memoizedRoutes &&
        memoizedRoutes.map(({ path, id }) => <Item key={id} path={path} />)}
    </div>
  );
}

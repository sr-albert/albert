import appRoute from "@/routes/app.route";
import { useMemo } from "react";
import "./ActionBar.scss";
import Item from "./ActionBarItem";

export default function ActionBar() {
  const memoizedRoutes = useMemo(() => {
    const routes = appRoute.routes;
    const appRoutes = routes[0].children;

    return appRoutes?.filter((r) => {
      if (!r.path) return false;

      return !r.path.includes("/:");
    });
  }, []);

  return (
    <div id="action-bar" className="horizontal">
      {/* {renderItems()} */}

      {memoizedRoutes &&
        memoizedRoutes.map(({ path, id }) => <Item key={id} path={path} />)}
    </div>
  );
}

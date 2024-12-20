import SuspenseLoading from "@/components/SuspenseLoading";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Admin = React.lazy(() => import("@/pages/Admin"));

export const adminRoute = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <Suspense fallback={<SuspenseLoading />}>
        <Admin />
      </Suspense>
    ),
  },
]);

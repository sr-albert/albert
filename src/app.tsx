/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {
  fetchAndActivate,
  getBoolean,
  getString,
} from "firebase/remote-config";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./app.scss";
import { appTheme } from "./app.theme";
import { firebaseRemoteConfig } from "./services/firebase.service";
import { BoundaryView } from "./views";
interface AppProps {
  isConfigActivated?: boolean;
  isOpenWork?: boolean;
  portalUrl?: string;
  loadingConfig?: boolean;
  socials?: any;
}
export const AppContext = createContext<IAppContext>({});
interface IAppContext extends AppProps {
  setConfig?: (config: any) => void;
}

export function App() {
  const [config, setAppConfig] = useState<AppProps>({
    isOpenWork: false,
    portalUrl: "",
    loadingConfig: false,
    isConfigActivated: false,
    socials: null,
  });

  useEffect(() => {
    const fetchRemoteConfig = async () => {
      setAppConfig((prev) => ({ ...prev, loadingConfig: true }));
      await fetchAndActivate(firebaseRemoteConfig);
      setAppConfig((prev) => ({
        ...prev,
        isConfigActivated: true,
        loadingConfig: false,
        isOpenWork: getBoolean(firebaseRemoteConfig, "is_open_work"),
        portalUrl: getString(firebaseRemoteConfig, "portal_url"),
        socials: JSON.parse(getString(firebaseRemoteConfig, "socials")),
      }));
    };

    fetchRemoteConfig();
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BoundaryView>
        <AppContext.Provider
          value={{
            ...config,
            setConfig: setAppConfig,
          }}
        >
          <Outlet />
        </AppContext.Provider>
      </BoundaryView>
    </ThemeProvider>
  );
}

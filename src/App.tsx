import React from "react";
import { AppStateProvider } from "./providers/state/AppState";
import { DrawerLayout } from "./components/DrawerLayout";

export const App = () => {
  return (
    <AppStateProvider>
      <DrawerLayout />
    </AppStateProvider>
  );
};

import React from "react";

import { AppStateContext } from "./AppStateContext";

export const AppStateProvider: React.FC = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const state = { isDrawerOpen };
  const dispatch = { setIsDrawerOpen };

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

import React from "react";

const defaultState = {
  state: {
    isDrawerOpen: false,
  },
  dispatch: {
    setIsDrawerOpen: (isOpen: boolean) => null,
  },
};

export const AppStateContext = React.createContext(defaultState);

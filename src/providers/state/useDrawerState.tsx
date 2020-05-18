import React from "react";
import { AppStateContext } from "./AppStateContext";
export const useDrawerState = () => {
  const { state, dispatch } = React.useContext(AppStateContext);
  const { isDrawerOpen } = state;
  const { setIsDrawerOpen } = dispatch;
  return { isDrawerOpen, setIsDrawerOpen };
};

import React from "react";
import { useDrawerState } from "../providers/state/useDrawerState";
import { i18n } from "../utils/i18n";

export const DrawerHandle = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerState();
  return (
    <div
      style={{
        background: "hsla(0, 0%, 0%, 0.5)",
        border: "solid 1px hsla(0, 0%, 0%, 0.9)",
        borderBottom: "none",
        color: "white",
        fontWeight: "bold",
        padding: 8,
        cursor: "pointer",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        width: "100%",
      }}
      onClick={() => setIsDrawerOpen(!isDrawerOpen)}
    >
      {i18n("combatActionDrawer.ui.handle")}
    </div>
  );
};

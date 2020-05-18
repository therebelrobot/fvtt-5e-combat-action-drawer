import React from "react";
import { useDrawerState } from "../providers/state/useDrawerState";

import { data } from "../data";
import { systems } from "../data/systems";

export const DrawerBody = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerState();
  const lang = game.i18n.lang;
  const system = game.settings.get(
    "fvtt-5e-combat-action-drawer",
    "gameSystem"
  );
  const baseActions = data[systems[system]][lang];
  console.log({ baseActions });
  return (
    <div
      style={{
        background: "hsla(0, 0%, 0%, 0.5)",
        borderLeft: "solid 1px hsla(0, 0%, 0%, 0.9)",
        borderRight: "solid 1px hsla(0, 0%, 0%, 0.9)",
        color: "white",
        padding: 8,
        height: isDrawerOpen ? 400 : 0,
        transition: "height .3s, padding-top .3s, padding-bottom .3s",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
        }}
      ></div>
    </div>
  );
};

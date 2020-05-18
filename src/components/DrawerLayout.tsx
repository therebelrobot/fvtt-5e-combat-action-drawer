import React from "react";
import { DrawerHandle } from "./DrawerHandle";
import { DrawerBody } from "./DrawerBody";

export const DrawerLayout: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: -7,
        right: 350,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        width: 300,
      }}
    >
      <DrawerHandle />
      <DrawerBody />
    </div>
  );
};

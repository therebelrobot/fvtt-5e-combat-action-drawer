import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { registerSettings } from "./utils/settings";

// import { Hooks } from "foundry-pc-types/types/core/hooks";

console.log(
  "Hello World! This code runs immediately when the module is loaded."
);

Hooks.on("init", function () {
  console.log(
    "This code runs once the Foundry VTT software begins it's initialization workflow."
  );
});

// This is the baseline hook in FoundryVTT for when the application is loaded.
Hooks.on("ready", () => {
  registerSettings();

  console.log(
    "This code runs once core initialization is ready and game data is available."
  );

  // inject react root
  $("body").append('<div id="template-module-react-root"></div>');

  // inject react application into react root
  ReactDOM.render(
    <App />,
    document.getElementById("template-module-react-root")
  );
});

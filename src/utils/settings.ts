import { i18n } from "./i18n";

export const registerSettings = () => {
  game.settings.register("fvtt-5e-combat-action-drawer", "gameSystem", {
    name: i18n("combatActionDrawer.settings.system.name"),
    hint: i18n("combatActionDrawer.settings.system.hint"),
    scope: "world",
    config: true,
    default: 1,
    type: Number,
    choices: {
      1: i18n("combatActionDrawer.settings.system.choices.1"),
    },
  });
};

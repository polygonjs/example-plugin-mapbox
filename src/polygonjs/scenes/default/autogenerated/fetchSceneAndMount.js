import { loadScene_default } from "./loadScene.js";

export const fetchSceneAndMount_default = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_default(options);
};

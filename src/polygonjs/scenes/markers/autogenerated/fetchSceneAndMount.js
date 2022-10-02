import { loadScene_markers } from "./loadScene.js";

export const fetchSceneAndMount_markers = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_markers(options);
};

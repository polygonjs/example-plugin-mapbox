import { loadScene_marker_demo } from "./loadScene.js";

export const fetchSceneAndMount_marker_demo = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_marker_demo(options);
};

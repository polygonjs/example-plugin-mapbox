import { loadSceneAsync_marker_demo } from "./loadSceneAsync.js";

export const loadSceneAndMountAsync_marker_demo = async function (
  options = {}
) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadSceneAsync_marker_demo(options);
};

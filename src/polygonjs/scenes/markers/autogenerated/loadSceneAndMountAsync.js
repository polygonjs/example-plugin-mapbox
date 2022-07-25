import { loadSceneAsync_markers } from "./loadSceneAsync.js";

export const loadSceneAndMountAsync_markers = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadSceneAsync_markers(options);
};

import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1661336698443",
  root: "1661336698443",
  nodes: {
    perspectiveCamera1: "1661336698443",
    "perspectiveCamera1/events1": "1661336698443",
    grid: "1661336698443",
    geo1: "1661336698443",
    renderersNetwork1: "1661336698443",
  },
};

export const loadSceneData_marker_demo = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "marker_demo",
    urlPrefix: sceneDataRoot + "/marker_demo",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};

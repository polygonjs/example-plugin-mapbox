import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1662852592605",
  root: "1662852592605",
  nodes: {
    perspectiveCamera1: "1662852592605",
    "perspectiveCamera1/events1": "1662852592605",
    grid: "1662852592605",
    geo1: "1662852592605",
    renderersNetwork1: "1662852592605",
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

import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1662852629450",
  root: "1662852629450",
  nodes: {
    perspectiveCamera1: "1662852629450",
    "perspectiveCamera1/events1": "1662852629450",
    grid: "1662852629450",
    renderersNetwork1: "1662852629450",
    geo1: "1662852629450",
    "geo1/MAT": "1662852629450",
  },
};

export const loadSceneData_markers = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "markers",
    urlPrefix: sceneDataRoot + "/markers",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};

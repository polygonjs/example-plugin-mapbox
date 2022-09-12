import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1663015920302",
  root: "1663015920302",
  nodes: {
    perspectiveCamera1: "1663015920302",
    "perspectiveCamera1/events1": "1663015920302",
    grid: "1663015920302",
    renderersNetwork1: "1663015920302",
    geo1: "1663015920302",
    "geo1/MAT": "1663015920302",
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

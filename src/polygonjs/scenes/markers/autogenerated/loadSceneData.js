import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1658752238067",
  root: "1658752238067",
  nodes: {
    perspectiveCamera1: "1658752238067",
    "perspectiveCamera1/events1": "1658752238067",
    grid: "1658752238067",
    renderersNetwork1: "1658752238067",
    geo1: "1658752238067",
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

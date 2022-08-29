import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1661812732695",
  root: "1661812732695",
  nodes: {
    perspectiveCamera1: "1661812732695",
    "perspectiveCamera1/events1": "1661812732695",
    grid: "1661812732695",
    renderersNetwork1: "1661812732695",
    geo1: "1661812732695",
    "geo1/MAT": "1661812732695",
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

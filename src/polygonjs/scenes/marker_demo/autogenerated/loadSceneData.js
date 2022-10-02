import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1664744386004",
  root: "1663015902647",
  nodes: {
    perspectiveCamera1: "1663015902647",
    "perspectiveCamera1/events1": "1664744386004",
    grid: "1663015902647",
    geo1: "1663015902647",
    renderersNetwork1: "1663015902647",
  },
  shaders: {},
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

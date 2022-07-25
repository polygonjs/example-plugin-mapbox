import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1658670262670",
  root: "1658670262670",
  nodes: {
    geo1: "1617471306194",
    "geo1/MAT": "1617471306194",
    "geo1/MAT/meshLambertBuilder_dinosaur1": "1617471306194",
    "geo1/MAT/meshLambertBuilder_dinosaur2": "1617472807456",
    COP: "1617471306194",
    perspectiveCamera1: "1612314202673",
    "perspectiveCamera1/events1": "1617471306194",
  },
};

export const loadSceneData_default = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "default",
    urlPrefix: sceneDataRoot + "/default",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};

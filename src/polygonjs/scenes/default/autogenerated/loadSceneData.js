import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1664744368964",
  root: "1664744368964",
  nodes: {
    geo1: "1617471306194",
    "geo1/MAT": "1617471306194",
    "geo1/MAT/meshLambertBuilder_dinosaur1": "1664744368964",
    "geo1/MAT/meshLambertBuilder_dinosaur2": "1664744368964",
    COP: "1664744368964",
    perspectiveCamera1: "1612314202673",
    "perspectiveCamera1/events1": "1617471306194",
  },
  shaders: {
    "/geo1/MAT/meshLambertBuilder_dinosaur1": {
      vertex: "1664744368964",
      fragment: "1664744368964",
      "customDepthMaterial.vertex": "1664744368964",
      "customDepthMaterial.fragment": "1664744368964",
      "customDistanceMaterial.vertex": "1664744368964",
      "customDistanceMaterial.fragment": "1664744368964",
      "customDepthDOFMaterial.vertex": "1664744368964",
      "customDepthDOFMaterial.fragment": "1664744368964",
    },
    "/geo1/MAT/meshLambertBuilder_dinosaur2": {
      vertex: "1664744368964",
      fragment: "1664744368964",
      "customDepthMaterial.vertex": "1664744368964",
      "customDepthMaterial.fragment": "1664744368964",
      "customDistanceMaterial.vertex": "1664744368964",
      "customDistanceMaterial.fragment": "1664744368964",
      "customDepthDOFMaterial.vertex": "1664744368964",
      "customDepthDOFMaterial.fragment": "1664744368964",
    },
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

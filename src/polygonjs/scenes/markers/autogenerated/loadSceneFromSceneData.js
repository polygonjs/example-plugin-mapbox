import { ScenePlayerImporter } from "@polygonjs/polygonjs/dist/src/engine/io/player/Scene";
import { PolyNodeController } from "@polygonjs/polygonjs/dist/src/engine/nodes/utils/poly/PolyNodeController";
import { configureScene, configurePolygonjs } from "../PolyConfig";
import { Poly } from "@polygonjs/polygonjs/dist/src/engine/Poly";
import { AllExpressionsRegister } from "@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All";
import { requiredImports_markers } from "./requiredImports";

const loadSceneFromSceneData_markers = async function (options) {
  const {
    domElement,
    sceneData,
    onProgress,
    autoPlay,
    createViewer,
    assetsRoot,
    libsRootPrefix,
    printWarnings,
    renderer,
    cameraMaskOverride,
  } = options;
  const runRegister = options.runRegister != null ? options.runRegister : true;

  if (runRegister) {
    // registers nodes required for this scene
    for (const node of requiredImports_markers.nodes) {
      Poly.registerNode(node, undefined, { printWarnings });
    }
    for (const operation of requiredImports_markers.operations) {
      Poly.registerOperation(operation, { printWarnings });
    }
    const polyNodesData = [];
    for (let polyNodeData of polyNodesData) {
      PolyNodeController.createNodeClassAndRegister(polyNodeData);
    }
    AllExpressionsRegister.run(Poly);
    configurePolygonjs(Poly);
  }

  Poly.libs.setRoot("./three/js/libs");

  function configureSceneAndOverrideAssetsRootIfRequired(scene) {
    configureScene(scene);
    if (assetsRoot) {
      scene.assets.setRoot(assetsRoot);
    }
    if (libsRootPrefix) {
      Poly.libs.setRootPrefix(libsRootPrefix);
    }
  }

  // load the scene and create a viewer
  const sceneName = "markers";
  const { scene, viewer } = await ScenePlayerImporter.loadSceneData({
    domElement,
    sceneName,
    configureScene: configureSceneAndOverrideAssetsRootIfRequired,
    sceneData,
    onProgress,
    autoPlay,
    createViewer,
    renderer,
    cameraMaskOverride,
  });
  return {
    scene,
    viewer,
  };
};

export { Poly, loadSceneFromSceneData_markers };

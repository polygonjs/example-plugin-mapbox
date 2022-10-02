import { SceneJsonExporterData } from "@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene";
import { BaseViewerType } from "@polygonjs/polygonjs/dist/src/engine/viewers/_Base";
import { PolySceneWithNodeMap_marker_demo } from "./PolySceneWithNodeMap";
import { WebGLRenderer } from "three";

type OnProgressCallback = (ratio: number, args: any) => void;
type ConfigureSceneData = (sceneData: SceneJsonExporterData) => void;

export interface LoadSceneOptions {
  sceneData?: SceneJsonExporterData;
  onProgress?: OnProgressCallback;
  domElement?: HTMLElement | string;
  moduleImportSuffix?: string;
  loadModules?: boolean;
  runRegister?: boolean;
  configureSceneData?: ConfigureSceneData;
  sceneDataRoot?: string;
  assetsRoot?: string;
  libsRootPrefix?: string;
  autoPlay?: boolean;
  createViewer?: boolean;
  printWarnings?: boolean;
  renderer?: WebGLRenderer;
  cameraMaskOverride?: string;
}
export interface LoadedData {
  scene: PolySceneWithNodeMap_marker_demo;
  viewer: BaseViewerType | undefined;
}
export type LoadScene_marker_demo = (
  options?: LoadSceneOptions
) => Promise<LoadedData>;

export const loadScene_marker_demo: LoadScene_marker_demo;

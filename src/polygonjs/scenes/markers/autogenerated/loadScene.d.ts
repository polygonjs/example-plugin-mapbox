import { SceneJsonExporterData } from "@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene";
import { BaseViewerType } from "@polygonjs/polygonjs/dist/src/engine/viewers/_Base";
import { PolySceneWithNodeMap_markers } from "./PolySceneWithNodeMap";
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
  scene: PolySceneWithNodeMap_markers;
  viewer: BaseViewerType | undefined;
}
export type LoadScene_markers = (
  options?: LoadSceneOptions
) => Promise<LoadedData>;

export const loadScene_markers: LoadScene_markers;

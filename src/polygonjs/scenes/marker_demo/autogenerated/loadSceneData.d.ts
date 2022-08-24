import { SceneJsonExporterData } from "@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene";

export type OnProgressCallback = (ratio: number, args: any) => void;

interface LoadManifestOptions {
  onProgress?: OnProgressCallback;
  sceneDataRoot?: string;
}

type LoadSceneData_marker_demo = (
  options?: LoadManifestOptions
) => Promise<SceneJsonExporterData>;

export const loadSceneData_marker_demo: LoadSceneData_marker_demo;

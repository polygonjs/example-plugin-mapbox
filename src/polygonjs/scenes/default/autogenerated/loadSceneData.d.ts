import {SceneJsonExporterData} from '@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene';

export type OnProgressCallback = (ratio: number) => void;

interface LoadManifestOptions {
	onProgress: OnProgressCallback;
}

type LoadSceneData_default = (options: LoadManifestOptions) => Promise<SceneJsonExporterData>;

export const loadSceneData_default: LoadSceneData_default;

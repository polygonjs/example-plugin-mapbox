import {SceneJsonExporterData} from '@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene';
import {BaseViewerType} from '@polygonjs/polygonjs/dist/src/engine/viewers/_Base';
import {PolySceneWithNodeMap_default} from './PolySceneWithNodeMap';

type OnProgressCallback = (ratio: number, args: any) => void;
type ConfigureSceneData = (sceneData: SceneJsonExporterData) => void;

interface LoadSceneAndMountAsyncOptions {
	onProgress: OnProgressCallback;
	domElement?: HTMLElement;
	moduleImportSuffix?: string;
	loadModules?: boolean;
	runRegister?: boolean;
	configureSceneData?: ConfigureSceneData;
	sceneDataRoot?: string;
	assetsRoot?: string;
	libsRootPrefix?: string;
	autoPlay?: boolean;
}
interface LoadedData {
	scene: PolySceneWithNodeMap_default;
	viewer: BaseViewerType | undefined;
}
type LoadSceneAndMountAsync_default = (options: LoadSceneAndMountAsyncOptions) => Promise<LoadedData>;

export const loadSceneAndMountAsync_default: LoadSceneAndMountAsync_default;

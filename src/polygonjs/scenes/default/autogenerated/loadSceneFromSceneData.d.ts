import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {SceneJsonExporterData} from '@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene';
import {OnProgressCallback} from './loadSceneData';
import {PolySceneWithNodeMap_default} from './PolySceneWithNodeMap';
import {BaseViewerType} from '@polygonjs/polygonjs/dist/src/engine/viewers/_Base';

export interface loadSceneOptions {
	sceneData: SceneJsonExporterData;
	onProgress: OnProgressCallback;
	autoPlay?: boolean;
	domElement?: HTMLElement;
	runRegister?: boolean;
	assetsRoot?: string;
	libsRootPrefix?: string;
}
interface LoadedData {
	scene: PolySceneWithNodeMap_default;
	viewer: BaseViewerType | undefined;
}
export type LoadSceneMethod = (options: loadSceneOptions) => Promise<LoadedData | undefined>;

declare const loadSceneFromSceneData_default: LoadSceneMethod;

export {Poly, loadSceneFromSceneData_default};

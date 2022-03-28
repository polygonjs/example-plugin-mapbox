import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
import manifest from './manifest.json';

export const loadSceneData_default = async (options) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes'
	return await SceneDataManifestImporter.importSceneData({
		urlPrefix: sceneDataRoot + '/' + 'default',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};

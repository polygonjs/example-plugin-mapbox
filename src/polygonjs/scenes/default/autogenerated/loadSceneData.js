import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
import manifest from './manifest.json';

export const loadSceneData_default = async (options) => {
	return await SceneDataManifestImporter.importSceneData({
		urlPrefix: `./polygonjs/scenes/default`,
		manifest: manifest,
		onProgress: options.onProgress,
	});
};

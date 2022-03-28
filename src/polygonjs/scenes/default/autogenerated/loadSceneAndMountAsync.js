import {loadSceneData_default} from './loadSceneData.js?t=1648490932546';

export const loadSceneAndMountAsync_default = async function (options) {
	const {
		onProgress,
		domElement,
		configureSceneData,
		autoPlay,
		sceneDataRoot,
		assetsRoot,
		libsRootPrefix
	} = options;
	const runRegister = options.runRegister != null ? options.runRegister : true;
	const loadModules = options.loadModules != null ? options.loadModules : true;

	const moduleNames = loadModules ? ["DRACOLoader", "GLTFLoader"] : [];
	const modulePromises = moduleNames.map((moduleName) => import('./modules/' + moduleName + (options.moduleImportSuffix || '')));
	const promises = [import('./loadSceneFromSceneData.js?t=1648490932546'), loadSceneData_default({onProgress, sceneDataRoot}), ...modulePromises];
	const results = await Promise.all(promises);
	const {Poly, loadSceneFromSceneData_default} = results[0];
	const sceneData = results[1];
	if(configureSceneData){
		configureSceneData(sceneData);
	}

	const loadedModules = [];
	for (let i = 2; i < results.length; i++) {
		loadedModules.push(results[i]);
	}
	// register modules
	let i = 0;
	for (let moduleName of moduleNames) {
		const moduleNameContainer = moduleName + 'Module';
		Poly.registerModule(loadedModules[i][moduleNameContainer]);
		i++;
	}

	const loadedData = await loadSceneFromSceneData_default({
		onProgress,
		sceneData,
		domElement,
		runRegister,
		autoPlay,
		assetsRoot,
		libsRootPrefix
	});
	return loadedData;
};

import {ScenePlayerImporter} from '@polygonjs/polygonjs/dist/src/engine/io/player/Scene';
import {configureScene} from '../PolyConfig';
import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../PolyConfig';
import {requiredImports_default} from './requiredImports';


const loadSceneFromSceneData_default = async function (options) {
	const {domElement, sceneData, onProgress} = options;
	const runRegister = options.runRegister != null ? options.runRegister : true;

	if( runRegister ){
		// registers nodes required for this scene
		for (const node of requiredImports_default.nodes) {
			Poly.registerNode(node);
		}
		for (const operation of requiredImports_default.operations) {
			Poly.registerOperation(operation);
		}
		AllExpressionsRegister.run(Poly);
		configurePolygonjs(Poly);
	}

	Poly.libs.setRoot('./three/js/libs');

	// load the scene and create a viewer
	const sceneName = 'default';
	const {scene, viewer} = await ScenePlayerImporter.loadSceneData({
		domElement,
		sceneName,
		configureScene,
		sceneData,
		onProgress,
		assetsRoot: '',
	});
	return {
		scene: scene,
		viewer,
	};
};

export {Poly, loadSceneFromSceneData_default};

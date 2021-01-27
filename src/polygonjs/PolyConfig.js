import { polyPluginOcclusion } from "@polygonjs/plugin-occlusion/dist/src/index";

export function configurePolygonjs(poly) {
	// configure the engine
	poly.registerPlugin(polyPluginOcclusion);
	poly.libs.setRoot('/three/js/libs');
}
export function configureScene(scene) {
	// configure the scene
}

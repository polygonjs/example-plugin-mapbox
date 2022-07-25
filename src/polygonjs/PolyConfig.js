import { polyPluginMapbox } from "@polygonjs/plugin-mapbox";
import {token} from '../ExampleData'

export function configurePolygonjs(poly) {
	// configure the engine
	poly.registerPlugin(polyPluginMapbox);
	polyPluginMapbox.setToken(token);
	poly.libs.setRoot('/three/js/libs');
}
export function configureScene(scene) {
	// configure the scene
}

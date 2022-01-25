import {PolyEngine} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {PolyScene} from '@polygonjs/polygonjs/dist/src/engine/scene/PolyScene';
import { polyPluginMapbox } from "@polygonjs/plugin-mapbox/dist/src/index";
import {token} from '../../../ExampleData'

export function configurePolygonjs(poly: PolyEngine) {
	// You can configure the engine,
	// which for instance could allow you to create your own nodes.
	// See https://github.com/polygonjs/plugins_tutorials
	poly.registerPlugin(polyPluginMapbox);
	polyPluginMapbox.setToken(token);
}

export function configureScene(scene: PolyScene) {
	// see scene and node API:
	// https://polygonjs.com/docs/api
}

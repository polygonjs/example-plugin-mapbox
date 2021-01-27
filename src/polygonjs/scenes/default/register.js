import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../../PolyConfig';
import {ModuleName} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/modules/_BaseRegister';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshBasicBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshBasicBuilder';
import {MeshStandardMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard';
import {MeshStandardBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder';
// obj
import {AreaLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/AreaLight';
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {MaterialsObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Materials';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {PolarTransformObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PolarTransform';
// sop
import {AttribCastSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCast';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {EventsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Events';
import {FileSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/File';
import {HierarchySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {PlaneSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane';
import {SphereSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
export class PolyRegister {
	static run() {
		AllExpressionsRegister.run(Poly);
		Poly.modulesRegister.register(
			ModuleName.DRACOLoader,
			import('@polygonjs/polygonjs/dist/src/modules/three/examples/jsm/loaders/DRACOLoader')
		);
		Poly.modulesRegister.register(
			ModuleName.GLTFLoader,
			import('@polygonjs/polygonjs/dist/src/modules/three/examples/jsm/loaders/GLTFLoader')
		);
		// event
		Poly.registerNode(CameraOrbitControlsEventNode);
		// mat
		Poly.registerNode(MeshBasicBuilderMatNode);
		Poly.registerNode(MeshStandardMatNode);
		Poly.registerNode(MeshStandardBuilderMatNode);
		// obj
		Poly.registerNode(AreaLightObjNode);
		Poly.registerNode(GeoObjNode);
		Poly.registerNode(HemisphereLightObjNode);
		Poly.registerNode(MaterialsObjNode);
		Poly.registerNode(PerspectiveCameraObjNode);
		Poly.registerNode(PolarTransformObjNode);
		// sop
		Poly.registerNode(AttribCastSopNode);
		Poly.registerNode(CopySopNode);
		Poly.registerNode(EventsSopNode);
		Poly.registerNode(FileSopNode);
		Poly.registerNode(HierarchySopNode);
		Poly.registerNode(MaterialSopNode);
		Poly.registerNode(MergeSopNode);
		Poly.registerNode(PlaneSopNode);
		Poly.registerNode(SphereSopNode);
		Poly.registerNode(TransformSopNode);
		// custom configuration
		configurePolygonjs(Poly);
	}
}

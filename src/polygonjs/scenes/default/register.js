import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../../PolyConfig';
import {ModuleName} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/modules/_BaseRegister';
// cop
import {ImageCopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder';
// obj
import {CopObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Cop';
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
// sop
import {AddSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Add';
import {AttribCreateSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCreate';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {DeleteSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Delete';
import {EventsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Events';
import {FileSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/File';
import {HexagonsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hexagons';
import {HierarchySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy';
import {InstanceSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance';
import {JitterSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Jitter';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MaterialsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Materials';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {NormalsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Normals';
import {ObjectPropertiesSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/ObjectProperties';
import {PointSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Point';
import {RestAttributesSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/RestAttributes';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
export class PolyRegister {
	static run() {
		AllExpressionsRegister.run(Poly);
		// modules
		Poly.modulesRegister.register(
			ModuleName.DRACOLoader,
			import('@polygonjs/polygonjs/dist/src/modules/three/examples/jsm/loaders/DRACOLoader')
		);
		Poly.modulesRegister.register(
			ModuleName.GLTFLoader,
			import('@polygonjs/polygonjs/dist/src/modules/three/examples/jsm/loaders/GLTFLoader')
		);
		// cop
		Poly.registerNode(ImageCopNode);
		// event
		Poly.registerNode(CameraOrbitControlsEventNode);
		// mat
		Poly.registerNode(MeshLambertBuilderMatNode);
		// obj
		Poly.registerNode(CopObjNode);
		Poly.registerNode(GeoObjNode);
		Poly.registerNode(HemisphereLightObjNode);
		Poly.registerNode(PerspectiveCameraObjNode);
		// sop
		Poly.registerNode(AddSopNode);
		Poly.registerNode(AttribCreateSopNode);
		Poly.registerNode(CopySopNode);
		Poly.registerNode(DeleteSopNode);
		Poly.registerNode(EventsSopNode);
		Poly.registerNode(FileSopNode);
		Poly.registerNode(HexagonsSopNode);
		Poly.registerNode(HierarchySopNode);
		Poly.registerNode(InstanceSopNode);
		Poly.registerNode(JitterSopNode);
		Poly.registerNode(MaterialSopNode);
		Poly.registerNode(MaterialsSopNode);
		Poly.registerNode(MergeSopNode);
		Poly.registerNode(NormalsSopNode);
		Poly.registerNode(ObjectPropertiesSopNode);
		Poly.registerNode(PointSopNode);
		Poly.registerNode(RestAttributesSopNode);
		Poly.registerNode(TransformSopNode);
		// custom configuration
		configurePolygonjs(Poly);
	}
}

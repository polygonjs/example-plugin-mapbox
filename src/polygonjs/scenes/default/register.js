import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../../PolyConfig';
// modules
import {ModuleName} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/modules/Common';
import {DRACOLoader} from '@polygonjs/polygonjs/dist/src/modules/three/examples/jsm/loaders/DRACOLoader';
import {GLTFLoader} from '@polygonjs/polygonjs/dist/src/modules/three/examples/jsm/loaders/GLTFLoader';
// cop
import {ImageCopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder';
// obj
import {CopNetworkObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork';
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
// sop
import {AddSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Add';
import {AttribCreateSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCreate';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {DeleteSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Delete';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {FileSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/File';
import {HexagonsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hexagons';
import {HierarchySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy';
import {InstanceSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance';
import {JitterSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Jitter';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork';
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
		Poly.modulesRegister.register(ModuleName.DRACOLoader, DRACOLoader);
		Poly.modulesRegister.register(ModuleName.GLTFLoader, GLTFLoader);
		// cop
		Poly.registerNode(ImageCopNode);
		// event
		Poly.registerNode(CameraOrbitControlsEventNode);
		// mat
		Poly.registerNode(MeshLambertBuilderMatNode);
		// obj
		Poly.registerNode(CopNetworkObjNode);
		Poly.registerNode(GeoObjNode);
		Poly.registerNode(HemisphereLightObjNode);
		Poly.registerNode(PerspectiveCameraObjNode);
		// sop
		Poly.registerNode(AddSopNode);
		Poly.registerNode(AttribCreateSopNode);
		Poly.registerNode(CopySopNode);
		Poly.registerNode(DeleteSopNode);
		Poly.registerNode(EventsNetworkSopNode);
		Poly.registerNode(FileSopNode);
		Poly.registerNode(HexagonsSopNode);
		Poly.registerNode(HierarchySopNode);
		Poly.registerNode(InstanceSopNode);
		Poly.registerNode(JitterSopNode);
		Poly.registerNode(MaterialSopNode);
		Poly.registerNode(MaterialsNetworkSopNode);
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

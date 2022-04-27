
import {PolyScene} from '@polygonjs/polygonjs/dist/src/engine/scene/PolyScene';
// obj
import {CopNetworkObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork';
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {MapboxCameraObjNode} from '@polygonjs/plugin-mapbox/dist/src/engine/nodes/obj/MapboxCamera';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
// sop
import {AddSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Add';
import {AttribCreateSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCreate';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {DeleteSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Delete';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {FileGLTFSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/FileGLTF';
import {HexagonsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hexagons';
import {HierarchySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy';
import {InstanceSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance';
import {JitterSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Jitter';
import {MapboxTransformSopNode} from '@polygonjs/plugin-mapbox/dist/src/engine/nodes/sop/MapboxTransform';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {NormalsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Normals';
import {NullSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Null';
import {ObjectPropertiesSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/ObjectProperties';
import {PointSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Point';
import {RestAttributesSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/RestAttributes';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
// mat
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder';
// cop
import {ImageCopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';

export class PolySceneWithNodeMap_default extends PolyScene {
	node(path: '/mapboxCamera1'): MapboxCameraObjNode;
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/geo1'): GeoObjNode;
	node(path: '/geo1/add1'): AddSopNode;
	node(path: '/geo1/transform1'): TransformSopNode;
	node(path: '/geo1/copy1'): CopySopNode;
	node(path: '/geo1/mapboxTransform1'): MapboxTransformSopNode;
	node(path: '/geo1/transform2'): TransformSopNode;
	node(path: '/geo1/file1'): FileGLTFSopNode;
	node(path: '/geo1/hierarchy1'): HierarchySopNode;
	node(path: '/geo1/objectProperties1'): ObjectPropertiesSopNode;
	node(path: '/geo1/material1'): MaterialSopNode;
	node(path: '/geo1/restAttributes1'): RestAttributesSopNode;
	node(path: '/geo1/file2'): FileGLTFSopNode;
	node(path: '/geo1/hierarchy2'): HierarchySopNode;
	node(path: '/geo1/transform3'): TransformSopNode;
	node(path: '/geo1/objectProperties2'): ObjectPropertiesSopNode;
	node(path: '/geo1/restAttributes2'): RestAttributesSopNode;
	node(path: '/geo1/transform4'): TransformSopNode;
	node(path: '/geo1/mapboxTransform2'): MapboxTransformSopNode;
	node(path: '/geo1/merge1'): MergeSopNode;
	node(path: '/geo1/hexagons1'): HexagonsSopNode;
	node(path: '/geo1/transform5'): TransformSopNode;
	node(path: '/geo1/normals1'): NormalsSopNode;
	node(path: '/geo1/transform6'): TransformSopNode;
	node(path: '/geo1/transform8'): TransformSopNode;
	node(path: '/geo1/delete_points_close_to_center'): DeleteSopNode;
	node(path: '/geo1/jitter1'): JitterSopNode;
	node(path: '/geo1/point_set_Py_to_0'): PointSopNode;
	node(path: '/geo1/instance1'): InstanceSopNode;
	node(path: '/geo1/attribCreate1'): AttribCreateSopNode;
	node(path: '/geo1/attribCreate2'): AttribCreateSopNode;
	node(path: '/geo1/OUT'): NullSopNode;
	node(path: '/geo1/MAT'): MaterialsNetworkSopNode;
	node(path: '/geo1/MAT/meshLambertBuilder_dinosaur1'): MeshLambertBuilderMatNode;
	node(path: '/geo1/MAT/meshLambertBuilder_dinosaur2'): MeshLambertBuilderMatNode;
	node(path: '/COP'): CopNetworkObjNode;
	node(path: '/COP/dinosaur1'): ImageCopNode;
	node(path: '/COP/dinosaur2'): ImageCopNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}

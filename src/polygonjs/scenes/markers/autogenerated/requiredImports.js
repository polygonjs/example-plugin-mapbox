// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshStandardMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { HemisphereLightObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight";
import { PerspectiveCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera";
import { RenderersNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/RenderersNetwork";
// rop
import { CSS2DRendererRopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/rop/CSS2DRenderer";
// sop
import { CSS2DObjectSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CSS2DObject";
import { AddSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Add";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
import { FileGLTFSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/FileGLTF";
import { HierarchySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PlaneHelperSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PlaneHelper";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";

export const requiredImports_markers = {
  nodes: [
    CameraOrbitControlsEventNode,
    MeshStandardMatNode,
    GeoObjNode,
    HemisphereLightObjNode,
    PerspectiveCameraObjNode,
    RenderersNetworkObjNode,
    CSS2DRendererRopNode,
    CSS2DObjectSopNode,
    AddSopNode,
    CopySopNode,
    EventsNetworkSopNode,
    FileGLTFSopNode,
    HierarchySopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PlaneHelperSopNode,
    TransformSopNode,
  ],
  operations: [],
};

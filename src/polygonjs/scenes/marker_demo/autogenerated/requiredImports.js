// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
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
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
import { PlaneHelperSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PlaneHelper";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";

export const requiredImports_marker_demo = {
  nodes: [
    CameraOrbitControlsEventNode,
    GeoObjNode,
    HemisphereLightObjNode,
    PerspectiveCameraObjNode,
    RenderersNetworkObjNode,
    CSS2DRendererRopNode,
    CSS2DObjectSopNode,
    AddSopNode,
    BoxSopNode,
    EventsNetworkSopNode,
    PlaneHelperSopNode,
    TransformSopNode,
  ],
  operations: [],
};

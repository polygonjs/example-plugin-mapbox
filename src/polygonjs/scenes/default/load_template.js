import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
import {SceneJsonImporter} from '@polygonjs/polygonjs/dist/src/engine/io/json/import/Scene';
import {PolyRegister} from './register';
const manifest = import('./manifest.json');

async function loadPolygonjsScene() {
    PolyRegister.run();

    const manifestContent = await manifest;
    if(!manifestContent){
        return;
    }
    const sceneData = await SceneDataManifestImporter.importSceneData({
        manifest: manifestContent.default,
        urlPrefix: `/public/polygonjs/scenes/default`,
    });

    const importer = new SceneJsonImporter(sceneData);
    const scene = await importer.scene();

    const cameraNode = scene.masterCameraNode();
    if (!cameraNode) {
        console.warn('no master camera found');
        return;
    }
    const container = document.getElementById('polygonjs-app');
    if (!container) {
        console.warn('no element to mount the viewer onto');
        return;
    }
    cameraNode.createViewer(container);

}

document.addEventListener('DOMContentLoaded', ()=> {
    loadPolygonjsScene();
});

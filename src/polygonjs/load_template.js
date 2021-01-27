import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
import {SceneJsonImporter} from '@polygonjs/polygonjs/dist/src/engine/io/json/import/Scene';
import {PolyRegister} from './scenes/default/register';
const manifestBySceneName = {
    default: import('./scenes/default/manifest.json')
}

async function loadPolygonjsScene(sceneName) {
    PolyRegister.run();

    const manifestContent = await manifestBySceneName[sceneName];
    if(!manifestContent){
        return;
    }
    const sceneData = await SceneDataManifestImporter.importSceneData({
        manifest: manifestContent.default,
        urlPrefix: `/public/polygonjs/scenes/${sceneName}`,
    });

    const importer = new SceneJsonImporter(sceneData);
    const scene = await importer.scene();
    window.scene = scene;

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
    loadPolygonjsScene('default')
});

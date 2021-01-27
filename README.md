# Polygonjs Plugin Occlusion Example

This repository shows how to use the [Occlusion Plugin](https://github.com/polygonjs/plugin-occlusion) for the WebGL engine [Polygonjs](https://github.com/polygonjs/polygonjs).

This plugin adds a node `SOP/Occlusion` which adds an occlusion attribute to a geometry (downloaded from [threedscans](http://threedscans.com/)), which in turn can be used in the material builder.

![Geometries with occlusion](https://github.com/polygonjs/example-plugin-occlusion/blob/main/doc/occlusion_examples.jpg?raw=true)
## Open the scene in the WebGL editor

`yarn && yarn edit`

This will open the scene saved in this repo. It is a simple scene with a few geometry, whose occlusion is added via the SOP/Occlusion node.

![Occlusion plugin from Polygonjs node-based Editor](https://github.com/polygonjs/example-plugin-occlusion/blob/main/doc/occlusion_example_in_editor.jpg?raw=true)

## Open the export scene without the editor

`yarn && yarn run snowpack dev`


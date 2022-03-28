# Polygonjs Plugin Mapbox Example

This repository shows how to use the [Mapbox Plugin](https://github.com/polygonjs/plugin-mapbox) for the WebGL engine [Polygonjs](https://github.com/polygonjs/polygonjs).

![scene with 3D objects above a map](https://github.com/polygonjs/example-plugin-mapbox/blob/main/doc/mapbox_examples.jpg?raw=true)

models are from:

- [https://sketchfab.com/3d-models/dinosaur-c743536f3c8e48049a00f19c8f8f6d4a](https://sketchfab.com/3d-models/dinosaur-c743536f3c8e48049a00f19c8f8f6d4a)
- [https://sketchfab.com/3d-models/dinosaur-3e12af7c5c354ea6b01bccfb529a9c02](https://sketchfab.com/3d-models/dinosaur-3e12af7c5c354ea6b01bccfb529a9c02)
## Open the scene in the WebGL editor

`yarn && yarn polygon`

and open your browser at

`http://localhost:8091?scene=default`

This will open the scene saved in this repo.

![mapbox plugin from Polygonjs node-based Editor](https://github.com/polygonjs/example-plugin-mapbox/blob/main/doc/mapbox_example_in_editor.jpg?raw=true)

## Open the exported scene without the editor

1. Go to the export folder: `cd public/polygonjs/build/default`. If the folder does not exist, make sure to open the editor as described above and save the scene. This will create the exported files.

2. Open a local server. You can do this in multiple ways. Either `python3 -m http.server` or `npx http-server -p 8000 -c-1 .`

3. Open your browser at `http://localhost:8000`




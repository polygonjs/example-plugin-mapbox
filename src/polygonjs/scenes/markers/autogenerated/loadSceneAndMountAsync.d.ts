import { LoadSceneAsyncOptions, LoadedData } from "./loadSceneAsync";

type LoadSceneAndMountAsync_markers = (
  options?: LoadSceneAsyncOptions
) => Promise<LoadedData>;

export const loadSceneAndMountAsync_markers: LoadSceneAndMountAsync_markers;

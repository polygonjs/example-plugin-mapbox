import { LoadSceneOptions, LoadedData } from "./loadScene";

type FetchSceneAndMount_markers = (
  options?: LoadSceneOptions
) => Promise<LoadedData>;

export const fetchSceneAndMount_markers: FetchSceneAndMount_markers;

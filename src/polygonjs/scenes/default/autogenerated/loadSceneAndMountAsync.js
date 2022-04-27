import {loadSceneAsync_default} from './loadSceneAsync.js';

export const loadSceneAndMountAsync_default = async function (options={}) {
	if(options && options.createViewer == null){
		options.createViewer = true;
	}
	return loadSceneAsync_default(options);
};

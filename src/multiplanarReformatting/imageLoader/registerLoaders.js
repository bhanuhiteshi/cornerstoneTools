import mpr from '../reformatting/index.js';

/**
 * Register the WADO-URI and WADO-RS image loaders and metaData providers
 * with an instance of Cornerstone Core.
 *
 * @param cornerstone The Cornerstone Core library to register the image loaders with
 */
function registerLoaders (cornerstone) {
  mpr.register(cornerstone);
}


export default registerLoaders;

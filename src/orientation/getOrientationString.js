import external from '../externalModules.js';
import convertToVector3 from '../util/convertToVector3.js';

export default function (vector) {
  const vec3 = convertToVector3(vector);

  // Thanks to David Clunie
  // https://sites.google.com/site/dicomnotes/

  let orientation = '';
  const orientationX = vec3.x < 0 ? 'R' : 'L';
  const orientationY = vec3.y < 0 ? 'A' : 'P';
  const orientationZ = vec3.z < 0 ? 'F' : 'H';

  // Should probably make this a function vector3.abs
  const abs = new external.cornerstoneMath.Vector3(Math.abs(vec3.x), Math.abs(vec3.y), Math.abs(vec3.z));

  for (let i = 0; i < 3; i++) {
    if (abs.x > 0.0001 && abs.x > abs.y && abs.x > abs.z) {
      orientation += orientationX;
      abs.x = 0;
    } else if (abs.y > 0.0001 && abs.y > abs.x && abs.y > abs.z) {
      orientation += orientationY;
      abs.y = 0;
    } else if (abs.z > 0.0001 && abs.z > abs.x && abs.z > abs.y) {
      orientation += orientationZ;
      abs.z = 0;
    } else {
      break;
    }
  }

  return orientation;
}

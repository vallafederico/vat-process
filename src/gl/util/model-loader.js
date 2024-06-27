import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const loader = new GLTFLoader();

export default (url, id) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => {
      const { scene } = gltf;
      const result = { scene };
      resolve(result);
    });
  });
};

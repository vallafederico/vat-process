// import { TextureLoader } from "three";
import { EXRLoader } from "three/addons/loaders/EXRLoader.js";

const tl = new EXRLoader();

export default function loadTexture(url) {
  return new Promise((resolve) => {
    tl.load(url, (data) => {
      data.needsUpdate = true;

      // add sizes
      data.source.w = data.source.data.width;
      data.source.h = data.source.data.height;
      data.source.r = data.source.data.width / data.source.data.height;

      resolve(data);
    });
  });
}

// this.texture = await loadTexture(dbgImg);

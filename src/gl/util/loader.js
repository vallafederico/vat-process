import loadModel from "./model-loader";
import loadTexture from "./texture-loader";
import loadExr from "./exr-loader";
import { assets as file } from "../../assets";

export async function loadAssets(opt = null) {
  // console.time("assets::"); // !1 remove timer from here
  const assets = opt || file;

  const promises = [];
  const names = [];

  for (const key in assets) {
    const asset = assets[key];

    const extension = asset.split(".").pop();

    if (extension === "glb" || extension === "gltf") {
      promises.push(loadModel(asset));
    } else if (
      extension === "jpg" ||
      extension === "png" ||
      extension === "webp" ||
      extension === "jpeg" ||
      extension === "bmp"
    ) {
      promises.push(loadTexture(asset));
    } else if (extension === "exr") {
      promises.push(loadExr(asset));
    }

    names.push(key);
  }

  const loaded = await Promise.all(promises);

  const result = names.reduce((acc, key, index) => {
    acc[key] = loaded[index];
    return acc;
  }, {});

  // console.timeEnd("assets::");

  return result;
}

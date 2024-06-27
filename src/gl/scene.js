import { Scene } from "three";
import { loadAssets } from "./util/loader";
import { Model } from "./model/";

export default class extends Scene {
  constructor(vp, {} = {}) {
    super();
    this.vp = vp;

    this.create();
    this.events();
  }

  async create() {
    this.assets = await loadAssets();
    console.table("aseets", this.assets);

    this.model = new Model(this.assets.model);
    this.add(this.model);
  }

  events() {
    // document.addEventListener("click", () => {
    //   this.model.inflate(1);
    // });
  }

  render(t) {
    if (this.model) this.model.render(t);
  }

  resize(vp) {
    this.vp = vp;
  }
}

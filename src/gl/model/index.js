import gsap from "../../gsap";

import { Group, ShaderMaterial, DoubleSide } from "three";
import vertexShader from "./vertex.vert";
import fragmentShader from "./fragment.frag";

import { Gui } from "../../gui";

export class Model extends Group {
  a = {
    inflate: 0,
  };

  constructor(data = {}) {
    super();
    this.data = data;
    this.mesh = data.scene.children[0];

    this.rotation.x = Math.PI / 2;

    this.material = new Material();
    this.mesh.material = this.material;
    this.add(this.mesh);

    Gui.gui.add(this, "animate");
  }

  render(t) {
    this.material.uniforms.u_progress.value =
      Gui.object.progress + this.a.inflate;
  }

  animate(val) {
    if (this.a.inflate === 1) {
      this.a.inflate = 0;
      return;
    }

    gsap.to(this.a, {
      inflate: 1,
      duration: 8,
    });
  }
}

// function findGroup(obj) {
//   if (obj.isGroup === true) {
//     return obj;
//   }

//   for (const key in obj) {
//     if (typeof obj[key] === "object") {
//       const result = findGroup(obj[key]);
//       if (result) {
//         return result;
//       }
//     }
//   }

//   return null;
// }

class Material extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader,
    });

    this.uniforms = {
      u_time: { value: options?.u_time || 0 },
      u_t1: { value: options?.u_t1 || null },
      u_offsets: { value: app.gl.scene.assets.offsets },
      u_normals: { value: app.gl.scene.assets.normals },
      u_progress: { value: Gui.object.progress },
      u_frames: { value: app.gl.scene.assets.offsets.source.h },
    };

    this.side = DoubleSide;
    // this.wireframe= true;
    // this.transparent= true;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }
}

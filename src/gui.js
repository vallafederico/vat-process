import GUI from "lil-gui";

const gui = new GUI();

const obj = {
  progress: 0,
};

gui.add(obj, "progress", 0, 1, 0.001);

export class Gui {
  static object = obj;
  static gui = gui;
}

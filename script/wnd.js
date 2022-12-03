import { config } from "./config.js";
import { getFolumn } from "../util/layout.js";

class Wnd {
  constructor(directionLR, directionTB) {
    this.wnd =
      directionTB === "top"
        ? getFolumn(directionLR).firstElementChild
        : getFolumn(directionLR).lastElementChild;
    this.setWnd(directionLR, directionTB);
  }
  setWnd(directionLR, directionTB) {
    this.wnd.style.transformOrigin = directionTB + " " + directionLR;
  }
}

export function wndMain() {
  new Wnd("left", "top");
  new Wnd("left", "bottom");
  new Wnd("right", "top");
  new Wnd("right", "bottom");
}

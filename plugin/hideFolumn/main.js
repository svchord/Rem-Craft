import { getFolumn } from "../../util/layout.js";
class hideFolumn {
  constructor(direction) {
    this.direction = direction;
    this.folumn = getFolumn(direction);
    this.wakeUpArea = this.getArea(direction);
  }
  getArea(direction) {
    document.body.insertAdjacentHTML("afterend", `<div id="${direction}-area"></div>`);
  }
}

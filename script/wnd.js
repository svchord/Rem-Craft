import { prefix, getFolumn } from "../util/layout.js";
import { fisrtToUpper } from "../util/convert.js";
import { updateStyle, root } from "../util/resource.js";

function setWndSelector(folumn, directionLR, directionTB) {
  let wnd =
    directionTB === "top"
      ? folumn.firstElementChild.firstElementChild
      : folumn.lastElementChild.firstElementChild;
  wnd.classList.add(`${prefix}-wnd-${directionLR}${fisrtToUpper(directionTB)}`);
}

function setFolumnSelector(direction) {
  let folumn = getFolumn(direction);
  folumn.classList.add(`${prefix}-folumn-${direction}`);
  setWndSelector(folumn, direction, "top");
  setWndSelector(folumn, direction, "bottom");
}

export function wndMain() {
  // setFolumnSelector("left");
  // setFolumnSelector("right");
}

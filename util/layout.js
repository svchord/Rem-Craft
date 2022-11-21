import { fisrtToUpper } from "./convert.js";
import { setMutationObserver } from "./observer.js";

// ParentNode.children 属性返回的是一个 HTMLCollection 实例
// HTMLCollection 是类似数组的对象，需要通过slice强制转换为数组
const layouts = document.getElementById("layouts").children;

export const layout = Array.prototype.slice.apply(layouts).filter((e) => {
  return (
    e.style.height !== "0px" &&
    e.style.transition === "var(--b3-width-transition)"
  );
})[0];

/**
 * 判断dock栏是否存在
 *
 * @param {String} direction - dock栏的方向：left, right
 * @return {Boolean} - 返回dock栏是否存在的布尔值
 */
export function isDockExist(direction) {
  direction = fisrtToUpper(direction);
  let dock = document.getElementById(`dock${direction}`);
  return !dock.classList.contains("fn__none");
}

export function setDockObserver(direction, func) {
  direction = fisrtToUpper(direction);
  let dock = document.getElementById(`dock${direction}`);
  setMutationObserver(dock, "attributes", func, { attributes: true });
}

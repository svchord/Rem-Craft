import { changeMode } from "./theme-conf.js";
import { autoSetBorders } from "./maximized.js";

export function modulesMain() {
  changeMode(); // 明暗切换
  autoSetBorders(); // 窗口向下还原时增加边框
}

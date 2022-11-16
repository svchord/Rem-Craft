import { changeMode } from "./modules/themeConf.js";
import { autoSetBorders } from "./modules/maximized.js";
import { initCalendar } from "./modules/addCalendar.js";

export function main() {
  changeMode(); // 明暗切换
  autoSetBorders(); // 窗口向下还原时增加边框
  initCalendar();
}

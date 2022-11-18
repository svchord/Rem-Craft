import { autoSetTabBar } from "./tab-bar/main.js";
import { root, updateStyle } from "../util/resource.js";

const pluginRoot = root + "plugin/";

export function pluginMain() {
  autoSetTabBar();
  updateStyle("pluginTabBar", pluginRoot + "tab-bar" + "/main.css");
}

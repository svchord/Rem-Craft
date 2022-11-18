import { autoSetTabBar } from "./tab-bar/main.js";
import { root, updateStyle } from "../utils/resource.js";
import { initCalendar } from "./calendar/main.js";

const pluginRoot = root + "scripts/plugins/";

export function pluginsMain() {
  autoSetTabBar();
  updateStyle("pluginTabBar", pluginRoot + "tab-bar" + "/main.css");
  initCalendar();
}

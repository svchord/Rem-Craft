import { config } from "../script/config.js";
import { root, updateStyle } from "../util/resource.js";
import { fisrtToUpper } from "../util/convert.js";

import { tabBarMain } from "./tabBar/main.js";
import { stautsMain } from "./status/main.js";
import { bulletMain } from "./bullet/main.js";

const pluginRoot = root + "plugin/";
const pluginConfig = config.plugin;

export function pluginMain() {
  tabBarMain();
  stautsMain();
  bulletMain();

  for (const key in pluginConfig) {
    if (Object.hasOwnProperty.call(pluginConfig, key)) {
      if (pluginConfig[key]) {
        updateStyle(
          `plugin${fisrtToUpper(key)}`,
          pluginRoot + key + "/main.css"
        );
      }
    }
  }
}

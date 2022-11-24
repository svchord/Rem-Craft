import { appMain } from "./app/index.js";
import { moduleMain } from "./script/index.js";
import { pluginMain } from "./plugin/index.js";
import { updateStyle, root } from "./util/resource.js";

export function main() {
  appMain();
  moduleMain();
  pluginMain();
}

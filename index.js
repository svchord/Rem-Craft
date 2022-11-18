import { appMain } from "./app/index.js";
import { moduleMain } from "./script/index.js";
import { pluginMain } from "./plugin/index.js";

export function main() {
  appMain();
  moduleMain();
  pluginMain();
}

import { initCalendar } from "./calendar/main.js";
import { SiyuanUtil } from "./comment/main.js";
export function appMain() {
  initCalendar();
  new SiyuanUtil();
}

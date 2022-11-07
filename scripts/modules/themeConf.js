import { updateStyle } from "../utils/resource.js";

let root = "/appearance/themes/Rem Craft/";
let themeRoot = root + "themes/";

let style = ["tdesign", "semi-design", "one-dark"];

let brand = [
  "blue",
  "orange",
  "red",
  "green",
  "cyan",
  "purple",
  "yellow",
  "pink",
  "gray",
];

let config = {
  light: style[0],
  dark: style[2],
  brand: brand[0],
};

export function changeMode() {
  let href = null;
  let light_path = themeRoot + config.light + "/light.css";
  let dark_path = themeRoot + config.dark + "/dark.css";

  /* 根据配置选项判断主题 */
  switch (window.siyuan.config.appearance.mode) {
    case 1:
      href = dark_path;
      let html = document.querySelector("html");
      html.setAttribute("class", "dark");
      break;
    case 0:
    default:
      href = light_path;
      break;
  }
  updateStyle("colorStyle", href);
}

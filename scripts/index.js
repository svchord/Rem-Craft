let root = "/appearance/themes/Rem Craft/themes/";

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

/**
 * 加载样式文件
 * @params {string} href 样式地址
 * @params {string} id 样式 ID
 */
let loadStyle = function (href, id = null) {
  let style = document.createElement("link");
  if (id) style.id = id;
  style.type = "text/css";
  style.rel = "stylesheet";
  style.href = href;
  document.head.appendChild(style);
};

/**
 * 更新样式文件
 * @params {string} id 样式文件 ID
 * @params {string} href 样式文件地址
 */
let updateStyle = function (id, href) {
  let style = document.getElementById(id);
  if (style) {
    style.setAttribute("href", href);
  } else {
    loadStyle(href, id);
  }
};

export const mode = () => {
  let href = null;
  let light_path = root + config.light + "/light.css";
  let dark_path = root + config.dark + "/dark.css";

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
};

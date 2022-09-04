theme = {};

theme.root = "/appearance/themes/Rem Craft/theme/";

theme.style = ["tdesign", "semi-design", "one-dark"];

theme.brand = [
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

theme.config = {
  light: theme.style[0],
  dark: theme.style[0],
  brand: theme.brand[0],
};

theme.light_path = theme.root + theme.config.light + "/light.css";
theme.dark_path = theme.root + theme.config.dark + "/dark.css";

/**
 * 加载样式文件
 * @params {string} href 样式地址
 * @params {string} id 样式 ID
 */
theme.loadStyle = function (href, id = null) {
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
theme.updateStyle = function (id, href) {
  let style = document.getElementById(id);
  if (style) {
    style.setAttribute("href", href);
  } else {
    theme.loadStyle(href, id);
  }
};

theme.mode = (() => {
  /* 根据配置选项判断主题 */
  switch (window.siyuan.config.appearance.mode) {
    case 0:
      theme.updateStyle("lightStyle", theme.light_path);
      break;
    case 1:
      theme.updateStyle("darkStyle", theme.dark_path);
      break;
    default:
      break;
  }
})();

theme.mode;

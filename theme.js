theme = {};

theme.root = "/appearance/themes/Rem Craft/themes/";

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
  dark: theme.style[2],
  brand: theme.brand[0],
};

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
  let href = null;
  let light_path = theme.root + theme.config.light + "/light.css";
  let dark_path = theme.root + theme.config.dark + "/dark.css";

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
  theme.updateStyle("colorStyle", href);
})();

theme.mode;

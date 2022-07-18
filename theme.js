theme = {};

theme.updateStyle = (() => {
  let style = document.getElementById("themeStyle");
  style.setAttribute("href", "/appearance/themes/Rem-Craft/theme.css");
})();

theme.mode = (() => {
  /* 根据配置选项判断主题 */
  switch (window.siyuan.config.appearance.mode) {
    case 0:
      theme.updateStyle;
      break;
    case 1:
      let html = document.querySelector("html");
      html.setAttribute("theme-mode", "dark");
      theme.updateStyle;
      break;
    default:
      break;
  }
})();

theme.mode;

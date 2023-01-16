export const root = "/appearance/themes/Rem Craft/";

async function fetchJson(url) {
  try {
    const response = await fetch(root + url);
    return response.json();
  } catch (e) {
    console.error(e);
  }
}

/**
 * 加载样式文件
 *
 * @param {string} href - 样式地址
 * @param {string} id - 样式 ID
 */
export function loadStyle(href, id = null) {
  let style = document.createElement("link");
  if (id) style.id = id;
  style.type = "text/css";
  style.rel = "stylesheet";
  fetchJson("theme.json").then((json) => {
    style.href = href + "?v=" + json.version;
  });
  document.head.appendChild(style);
}

/**
 * 更新样式文件
 *
 * @param {string} id - 样式文件 ID
 * @param {string} href - 样式文件地址
 */
export function updateStyle(id, href) {
  let style = document.getElementById(id);
  if (style) {
    fetchJson("theme.json").then((json) => {
      style.setAttribute("href", href + "?v=" + json.version);
    });
  } else {
    loadStyle(href, id);
  }
}

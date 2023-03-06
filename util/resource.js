export const root = '/appearance/themes/Rem Craft/';

const elements = {
    editorFontSize: document.getElementById('editorFontSize'),
    pdfjsScript: document.getElementById('pdfjsScript'),
    protyleWcHtmlScript: document.getElementById('protyleWcHtmlScript'),
    baseURL: document.getElementById('baseURL'),
    emojiScript: document.getElementById('emojiScript'),
    themeDefaultStyle: document.getElementById('themeDefaultStyle'),
    themeStyle: document.getElementById('themeStyle'),
    protyleHljsStyle: document.getElementById('protyleHljsStyle'),
    themeScript: document.getElementById('themeScript') ?? document.currentScript,
    iconDefaultScript: document.getElementById('iconDefaultScript'),
    iconScript: document.getElementById('iconScript'),
};

export async function checkVersion() {
    try {
        const response = await fetch(root + 'theme.json');
        if (!response.ok || response.status !== 200) {
            throw new Error(response.statusText);
        }
        const json = await response.json();
        let localVersion = json.version;
        return window.siyuan.config.appearance.themeVer === localVersion
            ? window.siyuan.config.appearance.themeVer
            : localVersion;
    } catch (e) {
        console.error(e);
    }
}

/**
 * 静态资源请求 URL 添加参数
 * @param {string} url 资源请求 URL
 * @return {string} 返回添加参数后的 URL
 */
export function addURLParam(
    url,
    param = {
        // t: new Date().getTime(),
        v: window.siyuan.config.appearance.themeVer,
    }
) {
    let new_url;
    switch (true) {
        case url.startsWith('//'):
            new_url = new URL(`https:${url}`);
            break;
        case url.startsWith('http://'):
        case url.startsWith('https://'):
            new_url = new URL(url);
            break;
        case url.startsWith('/'):
            new_url = new URL(url, window.location.origin);
            break;
        default:
            new_url = new URL(url, window.location.origin + window.location.pathname);
            break;
    }
    for (let [key, value] of Object.entries(param)) {
        new_url.searchParams.set(key, value);
    }
    switch (true) {
        case url.startsWith('//'):
            return new_url.href.substring(new_url.protocol.length);
        case url.startsWith('http://'):
        case url.startsWith('https://'):
            return new_url.href;
        case url.startsWith('/'):
            return new_url.href.substring(new_url.origin.length);
        default:
            return new_url.href.substring(
                (window.location.origin + window.location.pathname).length
            );
    }
}

/**
 * 加载脚本文件
 * @param {string} url 脚本地址
 * @param {string} type 脚本类型
 * @param {boolean} async 是否异步加载 & 非阻塞运行
 * @param {boolean} defer 是否异步加载 & 阻塞运行
 * @param {string} position 节点插入位置
 * @param {HTMLElementNode} element 节点插入锚点
 */
export function loadScript(
    src,
    type = 'module',
    async = false,
    defer = false,
    position = 'beforebegin',
    element = elements.themeScript
) {
    const script = document.createElement('script');
    if (type) script.type = type;
    if (async) script.async = true;
    if (defer) script.defer = true;
    script.src = src;
    element.insertAdjacentElement(position, script);
}

/**
 * 加载样式文件引用
 * @param {string} href 样式地址
 * @param {string} id 样式 ID
 * @param {string} position 节点插入位置
 * @param {HTMLElementNode} element 节点插入锚点
 */
export function loadLink(href, id = null, position = 'afterend', element = elements.themeStyle) {
    let link = document.createElement('link');
    if (id) link.id = id;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;
    element.insertAdjacentElement(position, link);
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
        style.setAttribute('href', href);
    } else {
        loadLink(href, id);
    }
}

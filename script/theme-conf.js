import { root, updateStyle, checkVersion, addURLParam } from '../util/resource.js';

const themeRoot = root + 'theme/';
let style = ['tdesign', 'semi-design', 'one-dark'];

let brand = ['blue', 'orange', 'red', 'green', 'cyan', 'purple', 'yellow', 'pink', 'gray'];

let config = {
    light: style[0],
    dark: style[2],
    brand: brand[0],
};

/* 根据配置选项判断主题 */
export async function changeMode() {
    let href = null;
    let light_path = themeRoot + config.light + '/light.css';
    let dark_path = themeRoot + config.dark + '/dark.css';

    switch (window.siyuan.config.appearance.mode) {
        case 1:
            href = dark_path;
            let html = document.querySelector('html');
            html.setAttribute('class', 'dark');
            break;
        case 0:
        default:
            href = light_path;
            break;
    }
        let version = await checkVersion();
        updateStyle('colorStyle', addURLParam(href, { v: version }));
   
}

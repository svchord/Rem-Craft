import { changeMode } from './theme-conf.js';
import { autoSetBorders } from './maximized.js';
import { statusMenuMain } from './status-menu.js';
import { appIconMain } from './appIcon.js';

(() => {
    changeMode(); // 明暗切换
    autoSetBorders(); // 窗口向下还原时增加边框
    statusMenuMain(); // 鼠标离开按钮时不关闭菜单
    appIconMain();
})();

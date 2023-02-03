import { fisrtToUpper, numToPx } from './convert.js';
import { setMutationObserver } from './observer.js';

export const prefix = 'rc';
export const layout = window.siyuan.layout.centerLayout.parent?.element;

/**
 * 判断dock栏是否存在
 *
 * @param {String} direction - dock栏的方向：left, right
 * @return {Boolean} - 返回dock栏是否存在的布尔值
 */
export function isDockExist(direction) {
    direction = fisrtToUpper(direction);
    let dock = document.getElementById(`dock${direction}`);
    if (dock) {
        return !dock.classList.contains('fn__none');
    } else {
        return false;
    }
}

export function setDockObserver(direction, func) {
    direction = fisrtToUpper(direction);
    let dock = document.getElementById(`dock${direction}`);
    let dockObserver = setMutationObserver('attributes', func);
    if (dock) {
        dockObserver.observe(dock, {
            attributes: true,
        });
    }
}

export function getFolumn(direction) {
    return direction === 'left' ? layout?.firstElementChild : layout?.lastElementChild;
}

export function setWndPadding(direction, value) {
    let folumn = getFolumn(direction);
    let resize = folumn?.querySelector('.layout__resize');
    let wnd = resize?.classList.contains('fn__none')
        ? folumn?.firstElementChild.firstElementChild
        : folumn?.lastElementChild.firstElementChild;
    if (wnd) {
        wnd.style.paddingBottom = numToPx(value);
    }
}

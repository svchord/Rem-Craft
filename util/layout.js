import { fisrtToUpper, numToPx } from './convert.js'
import { setMutationObserver } from './observer.js'

export const prefix = 'rc'

/**
 * 判断dock栏是否存在
 *
 * @param {String} direction - dock栏的方向：left, right
 * @return {Boolean} - 返回dock栏是否存在的布尔值
 */
export function isDockExist(direction) {
    direction = fisrtToUpper(direction)
    let dock = document.getElementById(`dock${direction}`)
    if (dock) {
        return !dock.classList.contains('fn__none')
    } else {
        return false
    }
}

export function setDockObserver(direction, func) {
    direction = fisrtToUpper(direction)
    let dock = document.getElementById(`dock${direction}`)
    let dockObserver = setMutationObserver('attributes', func)
    if (dock) {
        dockObserver.observe(dock, {
            attributes: true,
        })
    }
}

export function getLayoutDock(direction) {
    return document.getElementsByClassName(`layout__dock${direction === 'left' ? 'l' : 'r'}`)?.[0]
}

export function setWndPadding(direction, value) {
    let layoutDock = getLayoutDock(direction)
    let layoutDockObserver = setMutationObserver('attributes', () => {
        if (!layoutDock.children?.length) {
            return
        }
        let resize = layoutDock.querySelector('.layout__resize')
        let topWnd = layoutDock.firstElementChild
        let bottomWnd = [...layoutDock.children].at(-2)
        if (resize?.classList.contains('fn__none') && bottomWnd?.classList.contains('fn__none')) {
            topWnd.firstElementChild.style.paddingBottom = numToPx(value)
            bottomWnd.firstElementChild.style.paddingBottom = '0'
        } else {
            topWnd.firstElementChild.style.paddingBottom = '0'
            bottomWnd.firstElementChild.style.paddingBottom = numToPx(value)
        }
    })
    if (layoutDock) {
        layoutDockObserver.observe(layoutDock, {
            attributes: true,
            subtree: true,
        })
    }
}

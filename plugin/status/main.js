import { config } from '../../script/config.js'
import { setMutationObserver } from '../../util/observer.js'
import { setWndPadding } from '../../util/layout.js'
import { MenuItem } from '../../util/menu.js'
import { isDockExist, setDockObserver } from '../../util/layout.js'

class Status {
    constructor() {
        this.btn = document.getElementById('statusHelp')
        this.menu = window.siyuan.menus.menu
        this.start()
    }

    start() {
        const menuEle = this.menu.element
        let menuObserver = setMutationObserver('attributes', () => {
            if (menuEle.dataset.name === 'statusHelp' && !menuEle.querySelector('#dockBtn')) {
                this.addDockBtn()
            }
        })
        menuObserver.observe(menuEle, {
            attributes: true,
            attributeFilter: ['data-name'],
        })

        this.setRight()
        // setWndPadding('left', 0);
        setWndPadding('right', 40)
    }

    addDockBtn() {
        const menuItem = new MenuItem({
            label: window.siyuan.config.uiLayout.hideDock
                ? window.siyuan.languages.showDock
                : window.siyuan.languages.hideDock,
            icon: window.siyuan.config.uiLayout.hideDock ? 'iconDock' : 'iconHideDock',
        }).element
        menuItem.id = 'dockBtn'
        this.menu.append(menuItem)

        const useElement = menuItem.firstElementChild.firstElementChild
        const label = menuItem.querySelector('.b3-menu__label')
        menuItem.addEventListener('click', () => {
            const dockIsShow = useElement.getAttribute('xlink:href') === '#iconHideDock'
            if (dockIsShow) {
                useElement.setAttribute('xlink:href', '#iconDock')
                label.innerHTML = window.siyuan.languages.showDock
            } else {
                useElement.setAttribute('xlink:href', '#iconHideDock')
                label.innerHTML = window.siyuan.languages.hideDock
            }
            document.querySelectorAll('.dock').forEach((item) => {
                if (dockIsShow) {
                    item.classList.add('fn__none')
                } else if (item.querySelectorAll('.dock__item').length > 1) {
                    item.classList.remove('fn__none')
                }
            })
        })
    }

    setRight() {
        let status = document.getElementById('status')
        if (!isDockExist('right')) {
            status.style.right = '16px'
        }
        setDockObserver('right', () => {
            status.style.transition = 'right 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)'
            if (!isDockExist('right')) {
                status.style.right = '16px'
            } else {
                status.style.right = '56px'
            }
        })
    }
}

export function stautsMain() {
    let status = null
    if (config.plugin.status) {
        status = new Status()
    }
}

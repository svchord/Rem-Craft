import { config } from '../../script/config.js';
import { setMutationObserver } from '../../util/observer.js';
import { prefix, setWndPadding } from '../../util/layout.js';
import { isDockExist, setDockObserver } from '../../util/layout.js';

class Status {
    constructor() {
        this.btn = document.getElementById('statusHelp');
        this.menu = document.getElementById('commonMenu');
        this.start();
    }

    addBtn(id, iconId, label) {
        let btn = document.createElement('button');
        btn.id = id;
        btn.setAttribute('class', 'b3-menu__item');
        this.menu.appendChild(btn);
        btn.innerHTML = `<svg class='b3-menu__icon'><use xlink:href='#${iconId}'></use></svg><span class='b3-menu__label'>${label}</span>`;
        return btn;
    }

    addDockBtn() {
        let dockBtn = this.addBtn(
            'dockBtn',
            window.siyuan.config.uiLayout.hideDock ? 'iconDock' : 'iconHideDock',
            window.siyuan.config.uiLayout.hideDock
                ? window.siyuan.languages.showDock
                : window.siyuan.languages.hideDock
        );

        const useElement = dockBtn.firstElementChild.firstElementChild;
        const label = dockBtn.querySelector('.b3-menu__label');
        dockBtn.addEventListener('click', () => {
            const dockIsShow = useElement.getAttribute('xlink:href') === '#iconHideDock';
            if (dockIsShow) {
                useElement.setAttribute('xlink:href', '#iconDock');
                label.innerHTML = window.siyuan.languages.showDock;
            } else {
                useElement.setAttribute('xlink:href', '#iconHideDock');
                label.innerHTML = window.siyuan.languages.hideDock;
            }
            document.querySelectorAll('.dock--vertical').forEach((item) => {
                if (dockIsShow) {
                    if (item.querySelector('.dock__item')) {
                        item.classList.add('fn__none');
                    }
                } else {
                    if (item.querySelector('.dock__item')) {
                        item.classList.remove('fn__none');
                    }
                }
            });
        });
    }

    setRight() {
        let status = document.getElementById('status');
        if (!isDockExist('right')) {
            status.style.right = '16px';
        }
        setDockObserver('right', () => {
            status.style.transition = 'right 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)';
            if (!isDockExist('right')) {
                status.style.right = '16px';
            } else {
                status.style.right = '56px';
            }
        });
    }

    start() {
        let commonMenuObserver = setMutationObserver('attributes', () => {
            if (this.menu.dataset.name === 'statusHelp') {
                this.addDockBtn();
            }
        });
        commonMenuObserver.observe(this.menu, {
            attributes: true,
            attributeFilter: ['data-name'],
        });

        this.setRight();
        // setWndPadding('left', 0);
        setWndPadding('right', 40);
    }
}

export function stautsMain() {
    let status = null;
    if (config.plugin.status) {
        status = new Status();
    }
}

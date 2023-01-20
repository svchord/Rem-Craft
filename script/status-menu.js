import { config } from './config.js';
import { setWndPadding } from '../util/layout.js';

function stayMenu(elementId) {
    let btn = document.getElementById(elementId);
    let menu = document.querySelector(`#${elementId} >.b3-menu`);
    btn.addEventListener('mouseleave', (e) => {
        e.stopImmediatePropagation();
        menu.classList.remove('fn__none');
    });

    document.addEventListener('mouseup', (e) => {
        if (!menu.contains(e.target)) {
            menu.classList.add('fn__none');
        }
    });
}

export function statusMenuMain() {
    if (!config.plugin.status) {
        stayMenu('barDock');
        setWndPadding('left', 23);
        setWndPadding('right', 23);
    }
}

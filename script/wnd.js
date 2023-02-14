import { config } from './config.js';
import { getFolumn } from '../util/layout.js';

class Wnd {
    constructor(directionLR, directionTB) {
        this.wnd =
            directionTB === 'top'
                ? getFolumn(directionLR)?.firstElementChild
                : getFolumn(directionLR)?.lastElementChild;
        if (this.wnd) {
            this.setWnd(directionLR, directionTB);
        }
    }
    setWnd(directionLR, directionTB) {
        // this.wnd.style.transformOrigin = directionTB + ' ' + directionLR;
    }
}

export function wndMain() {
    getFolumn('left').classList.add('rc-left-folumn');
    getFolumn('right').classList.add('rc-right-folumn');
}

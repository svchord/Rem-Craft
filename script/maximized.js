import { isFullScreen } from '../util/winutil.js';

export function autoSetBorders() {
    window.addEventListener('resize', () => {
        document.body.style.border = isFullScreen() ? 'none' : '1px solid var(--b3-border-color)';
    });
}

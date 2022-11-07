export function isFullScreen() {
    if (window.outerHeight === screen.availHeight) {
        if (window.outerWidth === screen.availWidth ) {
            return true;
        }
    }
    return false;
};

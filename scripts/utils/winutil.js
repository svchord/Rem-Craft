export function isFullScreen() {
  return window.outerHeight === screen.availHeight &&
    window.outerWidth === screen.availWidth
    ? true
    : false;
}

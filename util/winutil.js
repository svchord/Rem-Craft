/**
 * 判断窗口是否最大化
 *
 * @export
 * @return {*}
 */
export function isFullScreen() {
    return window.outerHeight === screen.availHeight && window.outerWidth === screen.availWidth ? true : false;
}

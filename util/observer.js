/**
 * 设置元素尺寸监听器
 *
 * @param {Element} element - 被监听的元素
 * @param {Function} func - 获取尺寸后的操作
 */
export function setResizeObserver(func) {
    let callBack = function (entries, observer) {
        for (const entry of entries) {
            func(entry, observer);
        }
    };
    return new ResizeObserver(callBack);
}

/**
 * 设置元素DOM监听器
 *
 * @param {Element} element - 被监听的元素
 * @param {Function} func - 获取事件后的操作
 */
export function setMutationObserver(type, func) {
    let callBack = function (mutationList, observer) {
        mutationList.forEach((mutation) => {
            switch (mutation.type) {
                case type:
                    func(mutation, observer);
            }
        });
    };
    return new MutationObserver(callBack);
}

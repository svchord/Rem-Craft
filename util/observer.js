/**
 * 设置元素尺寸监听器
 *
 * @param {Element} element - 被监听的元素
 * @param {Function} func - 获取尺寸后的操作
 */
export function setResizeObserver(element, func) {
  let callBack = (entries) => {
    for (const entry of entries) {
      func(entry);
    }
  };

  const resizeObserver = new ResizeObserver(callBack);
  resizeObserver.observe(element);
}

/**
 * 设置元素DOM监听器
 *
 * @param {Element} element - 被监听的元素
 * @param {Function} func - 获取事件后的操作
 */
export function setMutationObserver(element, type, func, observerOptions) {
  let callBack = function (mutationList, observer) {
    mutationList.forEach((mutation) => {
      switch (mutation.type) {
        case type:
          func(observer, mutation);
      }
    });
  };
  const mutationObserver = new MutationObserver(callBack);
  mutationObserver.observe(element, observerOptions);
}

import { numToPx, fisrtToUpper } from "../../util/style.js";

// ParentNode.children 属性返回的是一个 HTMLCollection 实例
// HTMLCollection 是类似数组的对象，需要通过slice强制转换为数组
let layouts = document.getElementById("layouts").children;
let layout = Array.prototype.slice.apply(layouts).filter((e) => {
  return (
    e.style.height !== "0px" &&
    e.style.transition === "var(--b3-width-transition)"
  );
})[0];
let center = document.getElementsByClassName("layout__center")[0];
let customPrefix = "rc-tabBar";

/**
 * 判断dock栏是否存在
 *
 * @param {String} direction - dock栏的方向：left, right
 * @return {Boolean} - 返回dock栏是否存在的布尔值
 */
function isDockEXist(direction) {
  direction = fisrtToUpper(direction);
  let dock = document.getElementById(`dock${direction}`);
  return !dock.classList.contains("fn__none");
}

/**
 * 设置元素尺寸监听器
 *
 * @param {Element} element - 被监听的元素
 * @param {Function} func - 获取尺寸后的操作
 */
function setResizeObserver(element, func) {
  let callBack = (entries) => {
    for (const entry of entries) {
      func(entry.contentBoxSize[0].inlineSize);
    }
  };

  const wndObserver = new ResizeObserver(callBack);
  wndObserver.observe(element);
}

/**
 * 设置元素DOM监听器
 *
 * @param {Element} element - 被监听的元素
 * @param {Function} func - 获取事件后的操作
 */
function setMutationObserver(element, func, observerOptions) {
  let callBack = function (mutationList, observer) {
    mutationList.forEach((mutation) => {
      switch (mutation.type) {
        case "childList":
          func(observer);
      }
    });
  };
  var observer = new MutationObserver(callBack, observer);
  observer.observe(element, observerOptions);
}

/**
 * 定位左右上角页签栏
 *
 * @param {HTMLCollection} parent - layout__center
 * @param {String} direction - 定位方向：left, right
 */
function setTabBarSelector(parent, direction) {
  let children = Array.prototype.slice.apply(parent.children);
  let isWnd = children.filter((e) => {
    return e.dataset.type === "wnd";
  });

  // 定位到编辑窗口
  if (isWnd.length > 0) {
    let tabBar = isWnd[0].children[0];
    // 判断是否显示页签栏
    if (!tabBar.classList.contains("fn__none")) {
      tabBar.classList.add(`${customPrefix}-${direction}`);
      return;
    }
  } else {
    // 未定位到，即分屏情况
    let isSplitScreen = children.filter((e) => {
      return e.classList.contains("layout__resize--lr");
    });
    if (isSplitScreen.length === 1 && direction === "right") {
      // 左右分屏 且 定位方向为右上角
      return setTabBarSelector(children[2], direction);
    } else {
      // 上下分屏 或 左右分屏，定位方向为左上角
      return setTabBarSelector(children[0], direction);
    }
  }
}

/**
 * 设置元素的左右外边距
 *
 * @param {Element} element - 设置的元素
 * @param {String} direction - 外边距方向
 * @param {String} value - 外边距大小
 */
function setMargin(element, direction, value) {
  if (direction === "left") {
    element.style.marginLeft = numToPx(value);
  } else {
    element.style.marginRight = numToPx(value);
  }
}

function resetSelector(direction) {
  // 分屏后重置标记选择器
  let tabBar = document.getElementsByClassName(`${customPrefix}-${direction}`);
  if (tabBar.length > 0) {
    setMargin(tabBar[0], direction, 0);
    tabBar[0].classList.remove(`${customPrefix}-${direction}`);
  }
  setTabBarSelector(center, direction);
}

function setTabBarMargin(direction, margin) {
  let wnd =
    direction === "left" ? layout.firstElementChild : layout.lastElementChild;

  setResizeObserver(wnd, (wndWidth) => {
    let tabBar = document.getElementsByClassName(
      `${customPrefix}-${direction}`
    )[0];
    if (wndWidth >= 0 && wndWidth <= margin) {
      let marginTmp = margin - wndWidth;
      setMargin(tabBar, direction, marginTmp);
    } else {
      setMargin(tabBar, direction, 0);
    }
  });
}

/**
 * 根据边栏的宽度给顶部页签栏设置外边距
 *
 * @param {String} direction - 设置外边距方向：left, right
 */
function autoSetTabBarMargin(direction) {
  let btnWidth = 38;
  let dockWidth = 40;
  let macBtnsWidth = 69;
  let winBtnsWidth = 46 * 3;
  let margin =
    direction === "left"
      ? "windows" === window.siyuan.config.system.os
        ? btnWidth * 7
        : btnWidth * 6 + macBtnsWidth
      : "windows" === window.siyuan.config.system.os
      ? btnWidth * 4 + winBtnsWidth - dockWidth
      : btnWidth * 5 + 3;

  setTabBarSelector(center, direction);

  // 判断边栏是否存在
  if (!isDockEXist(direction)) {
    let tabBar = document.getElementsByClassName(
      `${customPrefix}-${direction}`
    )[0];
    let marginTmp = margin + dockWidth;
    setMargin(tabBar, direction, marginTmp);
    // setTabBarMargin(direction, margin + dockWidth);
  } else {
    // 监听边窗的宽度
    setTabBarMargin(direction, margin);
  }

  // 编辑区域监听
  setMutationObserver(
    center,
    () => {
      // 分屏监听
      resetSelector(direction);
      setTabBarMargin(direction, margin);

      // 空白页监听
      let empty = center.querySelector(".layout__empty");
      if (empty !== null) {
        setMutationObserver(
          center,
          (observer) => {
            if (center.querySelector(".layout__empty") === null) {
              resetSelector(direction);
              setTabBarMargin(direction, margin);
              observer.disconnect();
            }
          },
          {
            childList: true,
            subtree: true,
          }
        );
      }
    },
    {
      childList: true,
    }
  );
}

export function autoSetTabBar() {
  autoSetTabBarMargin("left");
  autoSetTabBarMargin("right");
}

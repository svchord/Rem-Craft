import { config } from "../../script/config.js";
import { numToPx } from "../../util/convert.js";
import { setResizeObserver, setMutationObserver } from "../../util/observer.js";
import { layout, isDockExist, setDockObserver } from "../../util/layout.js";

let center = document.getElementsByClassName("layout__center")[0];
let customPrefix = "rc-tabBar";

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

/**
 * 重置标记选择器
 *
 * @param {String} direction - 定位方向：left, right
 */
function resetSelector(direction) {
  let tabBar = document.getElementsByClassName(`${customPrefix}-${direction}`);
  if (tabBar.length > 0) {
    setMargin(tabBar[0], direction, 0);
    tabBar[0].classList.remove(`${customPrefix}-${direction}`);
  }
  setTabBarSelector(center, direction);
}

/**
 * 监听边窗宽度，设置页签栏外边距
 *
 * @param {String} direction - 定位方向：left, right
 * @param {Number} margin - 外边距的值
 */
function setTabBarMargin(direction, margin) {
  let wnd =
    direction === "left" ? layout.firstElementChild : layout.lastElementChild;

  setResizeObserver(wnd, (entry) => {
    let wndWidth = entry.contentBoxSize[0].inlineSize;
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

function addDockWidth(direction, margin, dockWidth) {
  if (!isDockExist(direction)) {
    setTabBarMargin(direction, margin + dockWidth);
  } else {
    setTabBarMargin(direction, margin);
  }
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
      : btnWidth * 5 + 2;

  setTabBarSelector(center, direction);

  // 判断边栏是否存在
  addDockWidth(direction, margin, dockWidth);
  setDockObserver(direction, () => {
    addDockWidth(direction, margin, dockWidth);
  });

  // 编辑区域监听
  setMutationObserver(
    center,
    "childList",
    () => {
      // 分屏监听
      resetSelector(direction);
      addDockWidth(direction, margin, dockWidth);

      // 空白页监听
      let empty = center.querySelector(".layout__empty");
      if (empty !== null) {
        setMutationObserver(
          center,
          "childList",
          (observer) => {
            if (center.querySelector(".layout__empty") === null) {
              resetSelector(direction);
              addDockWidth(direction, margin, dockWidth);
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

export function tabBarMain() {
  if (config.plugin.tabBar) {
    autoSetTabBarMargin("left");
    autoSetTabBarMargin("right");
  }
}

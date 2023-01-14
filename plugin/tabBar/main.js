import { config } from "../../script/config.js";
import { numToPx, pxToNum } from "../../util/convert.js";
import { setResizeObserver, setMutationObserver } from "../../util/observer.js";
import { isDockExist, getFolumn, setDockObserver } from "../../util/layout.js";

const center = document.getElementsByClassName("layout__center")[0];
const dockWidth = 40;

class TabBar {
  constructor(direction) {
    this.direction = direction;
    this.bar = this.getBar(center);
    this.maxMargin = isDockExist(direction)
      ? this.getMaxMargin()
      : this.getMaxMargin() + dockWidth;
    this.folumn = getFolumn(direction);
    this.start();
  }

  getBar(parent) {
    let children = Array.prototype.slice.apply(parent.children);
    let isWnd = children.filter((e) => {
      return e.dataset.type === "wnd";
    });

    // 定位到编辑窗口
    if (isWnd.length > 0) {
      let tabBar = isWnd[0].children[0];
      // 判断是否显示页签栏
      if (!tabBar.classList.contains("fn__none")) {
        return tabBar;
      }
    } else {
      // 未定位到，即分屏情况
      let isSplitScreen = children.filter((e) => {
        return e.classList.contains("layout__resize--lr");
      });
      if (isSplitScreen.length > 0 && this.direction === "right") {
        // 左右分屏 且 定位方向为右上角
        return this.getBar(children[children.length - 1]);
      } else {
        // 上下分屏 或 左右分屏，定位方向为左上角
        return this.getBar(children[0]);
      }
    }
  }

  getMaxMargin() {
    const topBar = document.getElementById("toolbar");
    const macBtnsWidth = 69;
    let margin = 0;

    for (let i = 0; i < topBar.children.length; i++) {
      const btn = topBar.children.item(i);
      if (btn.id === "drag") {
        if (this.direction === "left") {
          break;
        } else {
          margin = 0;
          continue;
        }
      }
      let style = window.getComputedStyle(btn);
      margin +=
        btn.clientWidth +
        pxToNum(style.marginLeft) +
        pxToNum(style.marginRight);
    }

    margin -= 8;
    if (this.direction === "left") {
      if ("darwin" === window.siyuan.config.system.os) {
        margin += macBtnsWidth;
      }
      return margin;
    } else {
      if ("darwin" === window.siyuan.config.system.os) {
        margin += 2;
      }
      margin -= dockWidth;
      return margin;
    }
  }

  setMargin(value) {
    this.direction === "left"
      ? (this.bar.style.marginLeft = numToPx(value))
      : (this.bar.style.marginRight = numToPx(value));
  }

  autoSetMargin(folumnWidth) {
    if (this.bar) {
      folumnWidth >= 0 && folumnWidth <= this.maxMargin
        ? this.setMargin(this.maxMargin - folumnWidth)
        : this.setMargin(0);
    }
  }

  resetBar() {
    if (this.bar) {
      this.setMargin(0);
      this.bar = this.getBar(center);
      this.autoSetMargin(pxToNum(this.folumn.style.width));
    } else {
      this.bar = this.getBar(center);
    }
  }

  start() {
    // 顶栏监听
    let topBarObserver = setMutationObserver("childList", () => {
      this.maxMargin = this.getMaxMargin();
      this.autoSetMargin(pxToNum(this.folumn.style.width));
    });
    const topBar = document.getElementById("toolbar");
    topBarObserver.observe(topBar, {
      childList: true,
      subtree: true,
    });

    // 边栏监听
    let folumnObserver = setResizeObserver((entry) => {
      let folumnWidth = entry.contentBoxSize[0].inlineSize;
      this.autoSetMargin(folumnWidth);
    });
    folumnObserver.observe(this.folumn);

    // dock栏监听
    setDockObserver(this.direction, () => {
      this.maxMargin = isDockExist(this.direction)
        ? this.getMaxMargin()
        : this.getMaxMargin() + dockWidth;
      this.autoSetMargin(pxToNum(this.folumn.style.width));
    });

    // 编辑区域监听
    let centerObserver = setMutationObserver("childList", (mutation) => {
      // 分屏监听
      if (
        mutation?.addedNodes[0]?.classList?.contains("layout__resize") ||
        mutation?.removedNodes[0]?.classList?.contains("layout__resize")
      ) {
        this.resetBar();
      }
      // 空白页监听
      if (mutation?.removedNodes[0]?.nodeType === 1) {
        if (mutation.removedNodes[0].querySelector(".layout__empty")) {
          this.resetBar();
        }
      }
    });

    centerObserver.observe(center, {
      childList: true,
      subtree: true,
    });
  }
}

export function tabBarMain() {
  let barLeft = null;
  let barRight = null;
  if (config.plugin.tabBar) {
    barLeft = new TabBar("left");
    barRight = new TabBar("right");
  }
}

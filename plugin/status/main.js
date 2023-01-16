import { config } from "../../script/config.js";
// import { setMutationObserver } from "../../util/observer.js";
import { prefix, setWndPadding } from "../../util/layout.js";
import { isDockExist, setDockObserver } from "../../util/layout.js";

const btnHelp = document.getElementById("statusHelp");
const helpMenu = btnHelp.querySelector(".b3-menu");

function addButton(id, iconId, label) {
  let btn = document.createElement("button");
  btn.id = id;
  btn.setAttribute("class", "b3-menu__item");
  helpMenu.appendChild(btn);
  btn.innerHTML = `<svg class='b3-menu__icon'><use xlink:href='#${iconId}'></use></svg><span class='b3-menu__label'>${label}</span>`;
  return btn;
}

function addDockButton() {
  let dockBtn = addButton(
    "dockBtn",
    window.siyuan.config.uiLayout.hideDock ? "iconDock" : "iconHideDock",
    window.siyuan.config.uiLayout.hideDock
      ? window.siyuan.languages.showDock
      : window.siyuan.languages.hideDock
  );

  const useElement = dockBtn.firstElementChild.firstElementChild;
  const label = dockBtn.querySelector(".b3-menu__label");
  dockBtn.addEventListener("click", () => {
    // const dockIsShow =
    //   useElement.getAttribute("xlink:href") === "#iconHideDock";
    if (!window.siyuan.config.uiLayout.hideDock) {
      useElement.setAttribute("xlink:href", "#iconDock");
      label.innerHTML = window.siyuan.languages.showDock;
      window.siyuan.config.uiLayout.hideDock = true;
    } else {
      useElement.setAttribute("xlink:href", "#iconHideDock");
      label.innerHTML = window.siyuan.languages.hideDock;
      window.siyuan.config.uiLayout.hideDock = false;
    }
    document.querySelectorAll(".dock").forEach((item) => {
      if (window.siyuan.config.uiLayout.hideDock) {
        if (item.querySelector(".dock__item")) {
          item.classList.add("fn__none");
        }
      } else {
        if (item.querySelector(".dock__item")) {
          item.classList.remove("fn__none");
        }
      }
    });
  });
}

function addDockMenu() {
  let menuBtn = addButton("wndBtn", "iconLeft", "打开选中边窗");
  let dockBtn = document.getElementById("barDock");
  let menu = dockBtn.querySelector(".b3-menu");
  menu.classList.add(`${prefix}-dock-menu`);
  menuBtn.appendChild(menu);

  menuBtn.addEventListener("mouseover", () => {
    menu.classList.remove("fn__none");
  });
  helpMenu.querySelectorAll(".b3-menu__item").forEach((element) => {
    if (element.id !== "wndBtn") {
      element.addEventListener("mouseover", () => {
        menu.classList.add("fn__none");
      });
    }
  });
  menu.addEventListener("mouseleave", () => {
    menu.classList.add("fn__none");
  });
}

function setStatusRight() {
  let status = document.getElementById("status");

  if (!isDockExist("right")) {
    status.style.right = "16px";
  }

  setDockObserver("right", () => {
    status.style.transition = "right 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)";
    if (!isDockExist("right")) {
      status.style.right = "16px";
    } else {
      status.style.right = "56px";
    }
  });
}

function resetBtnListener() {
  helpMenu.dataset.switch = "close";
  btnHelp.addEventListener("mouseleave", (e) => {
    e.stopImmediatePropagation();
  });
  btnHelp.addEventListener("click", (e) => {
    if (!helpMenu.contains(e.target)) {
      e.stopImmediatePropagation();
      if (helpMenu.dataset.switch === "close") {
        helpMenu.dataset.switch = "open";
      } else if (helpMenu.dataset.switch === "open") {
        helpMenu.dataset.switch = "close";
      }
    }
  });
  document.addEventListener("mouseup", (e) => {
    if (!btnHelp.contains(e.target) && helpMenu.dataset.switch === "open") {
      helpMenu.dataset.switch = "close";
    }
  });
}

export function stautsMain() {
  if (config.plugin.status) {
    // autoSetMsgWidth();
    setStatusRight();
    addDockButton();
    addDockMenu();
    resetBtnListener();
    setWndPadding("left", 0);
    setWndPadding("right", 40);
  }
}

import { config } from "../../script/config.js";
import { setMutationObserver } from "../../util/observer.js";
import { prefix, setWndPadding } from "../../util/layout.js";
import { isDockExist, setDockObserver } from "../../util/layout.js";

const btnHelp = document.getElementById("barHelp");
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
    "iconHideDock",
    window.siyuan.languages.hideDock
  );

  const useElement = dockBtn.firstElementChild.firstElementChild;
  const label = dockBtn.querySelector(".b3-menu__label");
  if (!isDockExist("left") && !isDockExist("left")) {
    useElement.setAttribute("xlink:href", "#iconDock");
    label.innerHTML = window.siyuan.languages.showDock;
  }

  dockBtn.addEventListener("click", () => {
    const dockIsShow =
      useElement.getAttribute("xlink:href") === "#iconHideDock";
    if (dockIsShow) {
      useElement.setAttribute("xlink:href", "#iconDock");
      label.innerHTML = window.siyuan.languages.showDock;
    } else {
      useElement.setAttribute("xlink:href", "#iconHideDock");
      label.innerHTML = window.siyuan.languages.hideDock;
    }
    document.querySelectorAll(".dock").forEach((item) => {
      if (dockIsShow) {
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
  menu.classList.add(prefix + "dock-menu");
  menuBtn.appendChild(menu);

  menuBtn.addEventListener("mouseover", () => {
    menu.classList.remove("fn__none");
  });
  menu.addEventListener("mouseleave", () => {
    menu.classList.add("fn__none");
  });
}

function autoSetMsgWidth() {
  let msg = document.getElementsByClassName("status__msg")[0];
  console.log(msg);
  setMutationObserver(
    msg,
    "childList",
    (observer, mutation) => {
      let msgDom = mutation.target;
      msgDom.style.maxWidth = "400px";
      setTimeout(() => {
        msgDom.style.maxWidth = "120px";
      }, 1500);
    },
    { childList: true }
  );
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
  let btn = document.getElementById("barHelp");
  let menu = btn.querySelector(".b3-menu");
  menu.dataset.switch = "close";
  btn.addEventListener("mouseleave", (e) => {
    e.stopImmediatePropagation();
  });
  btn.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
      e.stopImmediatePropagation();
      if (menu.dataset.switch === "close") {
        menu.dataset.switch = "open";
      } else if (menu.dataset.switch === "open") {
        menu.dataset.switch = "close";
      }
    }
  });
  document.addEventListener("mouseup", (e) => {
    if (!btn.contains(e.target) && menu.dataset.switch === "open") {
      menu.dataset.switch = "close";
    }
  });
}

export function stautsMain() {
  if (config.plugin.status) {
    autoSetMsgWidth();
    setStatusRight();
    addDockButton();
    addDockMenu();
    resetBtnListener();
    setWndPadding("left", 0);
    setWndPadding("right", 40);
  }
}

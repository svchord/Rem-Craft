import { config } from "../../script/config.js";
import { setMutationObserver } from "../../util/observer.js";
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
  // menu.classList.add("b3-menu__submenu");
  // menu.classList.remove("b3-menu");
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
    "characterData",
    (observer, mutation) => {
      let msgDom = mutation.target;
      console.log(msgDom.firstChild.data);
      msgDom.style.maxWidth = "1000px";
      console.log(msgDom.style.maxWidth);
    },
    { characterData: true }
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

export function stautsMain() {
  if (config.plugin.status) {
    autoSetMsgWidth();
    setStatusRight();
    addDockButton();
    addDockMenu();
  }
}

import { config } from "../../script/config.js";
import { setMutationObserver } from "../../util/observer.js";
import { prefix, setWndPadding } from "../../util/layout.js";
import { isDockExist, setDockObserver } from "../../util/layout.js";

class Status {
  constructor() {
    this.btn = document.getElementById("statusHelp");
    this.menu = document.getElementById("commonMenu");
    this.dockBtn = document.getElementById("barDock");
    this.dockMenu = this.dockBtn.querySelector(".b3-menu");
    this.start();
  }

  addBtn(id, iconId, label) {
    let btn = document.createElement("button");
    btn.id = id;
    btn.setAttribute("class", "b3-menu__item");
    this.menu.appendChild(btn);
    btn.innerHTML = `<svg class='b3-menu__icon'><use xlink:href='#${iconId}'></use></svg><span class='b3-menu__label'>${label}</span>`;
    return btn;
  }

  addDockBtn() {
    let dockBtn = this.addBtn(
      "dockBtn",
      window.siyuan.config.uiLayout.hideDock ? "iconDock" : "iconHideDock",
      window.siyuan.config.uiLayout.hideDock
        ? window.siyuan.languages.showDock
        : window.siyuan.languages.hideDock
    );

    const useElement = dockBtn.firstElementChild.firstElementChild;
    const label = dockBtn.querySelector(".b3-menu__label");
    dockBtn.addEventListener("click", () => {
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

  addDockMenu() {
    let menuBtn = this.addBtn("wndBtn", "iconLeft", "打开选中边窗");
    menuBtn.appendChild(this.dockMenu);
    menuBtn.addEventListener("mouseover", () => {
      this.dockMenu.classList.remove("fn__none");
    });

    this.menu.querySelectorAll(".b3-menu__item").forEach((element) => {
      if (element.id !== "wndBtn") {
        element.addEventListener("mouseover", () => {
          this.dockMenu.classList.add("fn__none");
        });
      }
    });
    this.dockMenu.addEventListener("mouseleave", () => {
      this.dockMenu.classList.add("fn__none");
    });
  }

  setRight() {
    let status = document.getElementById("status");
    if (!isDockExist("right")) {
      status.style.right = "16px";
    }
    setDockObserver("right", () => {
      status.style.transition =
        "right 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)";
      if (!isDockExist("right")) {
        status.style.right = "16px";
      } else {
        status.style.right = "56px";
      }
    });
  }

  start() {
    this.dockMenu.classList.add(`${prefix}-dock-menu`);
    
    let commonMenuObserver = setMutationObserver("attributes", (mutation) => {
      if (mutation.target.dataset.name === "statusHelp") {
        console.log(mutation);
        this.addDockBtn();
        this.addDockMenu();
      }
    });
    commonMenuObserver.observe(commonMenu, {
      attributes: true,
      attributeFilter: ["data-name"],
    });
    this.setRight();
    setWndPadding("left", 0);
    setWndPadding("right", 40);
  }
}

export function stautsMain() {
  let status = null;
  if (config.plugin.status) {
    status = new Status();
  }
}

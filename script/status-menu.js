import { config } from "./config.js";

function stayMenu(elementId) {
  let btn = document.getElementById(elementId);
  let menu = document.querySelector(`#${elementId} >.b3-menu`);
  btn.addEventListener("mouseleave", () => {
    menu.classList.remove("fn__none");
  });
  document.addEventListener("mouseup", () => {
    menu.classList.add("fn__none");
  });

  if (!config.plugin.status) {
    btn.addEventListener("mouseenter", () => {
      let anotherMenu = document.querySelector(
        `#status > .toolbar__item:not(#${elementId}) > .b3-menu`
      );
      anotherMenu.classList.add("fn__none");
    });
  }
}

export function statusMenuMain() {
  stayMenu("barHelp");
  stayMenu("barDock");
}

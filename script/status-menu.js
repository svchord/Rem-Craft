import { config } from "./config.js";

function stayMenu(elementId) {
  let btn = document.getElementById(elementId);
  let menu = btn.querySelector(".b3-menu");
  btn.addEventListener("mouseenter", () => {
    let anotherMenu = document.querySelector(
      `#status > .toolbar__item:not(#${elementId}) > .b3-menu`
    );
    console.log(elementId);
    anotherMenu.classList.add("fn__none");
  });
  btn.addEventListener("mouseleave", () => {
    menu.classList.remove("fn__none");
  });
  document.addEventListener("mouseup", () => {
    menu.classList.add("fn__none");
  });
}

export function statusMenuMain() {
  stayMenu("barHelp");
  if (!config.plugin.status) {
    stayMenu("barDock");
  }
}

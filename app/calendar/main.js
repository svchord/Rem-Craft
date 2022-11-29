function insertBtn(elementId) {
  // 把日历图标 放到  搜索图标前面
  let element = document.getElementById(elementId);
  element.insertAdjacentHTML(
    "beforebegin",
    '<div id="calendar" class="toolbar__item b3-tooltips b3-tooltips__se" aria-label="日历" ></div>'
  );
  // 日历面板，这里是插入挂件
  element.insertAdjacentHTML(
    "afterend",
    ` <div
      data-node-index="1"
      data-type="NodeWidget"
      class="iframe"
      data-subtype="widget"
    >
      <div class="iframe-content">
        <iframe id="calendarPanel" style="visibility:hidden;position: fixed; z-index: 1000; top: 225px; width: 300px; height: 350px; background-color: var(--b3-theme-background);box-shadow: var(--b3-dialog-shadow); border:none; border-radius: 5px; transform: translate(-50%, -50%); overflow: auto;" src="/appearance/themes/Rem Craft/app/calendar" data-src="/appearance/themes/Rem Craft/app/calendar" data-subtype="widget" ></iframe>
      </div>
    </div>`
  );
}

export function initCalendar() {
  if ("darwin" === window.siyuan.config.system.os) {
    insertBtn("barSearch");
    let calendarPanel = document.getElementById("calendarPanel");
    calendarPanel.style.right = "0px";
  } else {
    insertBtn("barBack");
    let calendarPanel = document.getElementById("calendarPanel");
    calendarPanel.style.left = "200px";
  }

  let calendarIcon = document.getElementById("calendar");
  let calendarPanel = document.getElementById("calendarPanel");

  calendarIcon.innerHTML = `<svg t="1662957805816" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2374" width="200" height="200"><path d="M797.257 402.286h-570.514v113.371h570.514v-113.371zM910.629 76.8h-58.514v-76.8h-113.371v76.8h-453.486v-76.8h-113.371v76.8h-58.514c-62.171 0-113.371 51.2-113.371 113.371v724.114c0 62.171 51.2 109.714 113.371 109.714h797.257c62.171 0 113.371-47.543 113.371-109.714v-724.114c0-62.171-51.2-113.371-113.371-113.371zM910.629 914.286h-797.257v-625.371h797.257v625.371zM625.371 629.029h-398.629v113.371h398.629v-113.371z"></path></svg>`;

  calendarIcon.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
      if (calendarPanel.style.visibility === "hidden") {
        calendarPanel.style.visibility = "visible";
      } else {
        calendarPanel.style.visibility = "hidden";
      }
    },
    false
  );
  calendarPanel.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
    },
    false
  );

  // 隐藏历史面板
  function hideCalendarPanel() {
    if (calendarPanel.style.visibility === "visible") {
      calendarPanel.style.visibility = "hidden";
    }
  }
  // 点击其他区域时，隐藏日历面板
  window.addEventListener("click", hideCalendarPanel, false);
}

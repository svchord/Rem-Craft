import { config } from '../../script/config.js';
import { numToPx } from '../../util/convert.js';
function insertBtn(elementId) {
    // 把日历图标 放到 {{elementId}} 图标前面
    const element = document.getElementById(elementId);
    if (element) {
        element.insertAdjacentHTML(
            'beforebegin',
            '<div id="calendar" class="toolbar__item b3-tooltips b3-tooltips__se" aria-label="日历" ></div>'
        );
    }
}

// 计算页面的实际高度，iframe自适应会用到
function calcPageHeight(doc) {
    var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight);
    var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
    var height = Math.max(cHeight, sHeight) + 15;
    return numToPx(height);
}

function initCalendar() {
    // 日历面板，这里是插入挂件
    document.body.insertAdjacentHTML(
        'beforeend',
        `<iframe
            id="calendarIframe"
            style="
                border:none;
                visibility:hidden;
                position: fixed; 
                z-index: 1000; 
                top: 50px; 
                width:auto;
                border-radius: 5px; 
                box-shadow: var(--b3-dialog-shadow); 
            "
            src="/appearance/themes/Rem Craft/app/calendar" 
            data-src="/appearance/themes/Rem Craft/app/calendar" 
            data-subtype="widget" 
        />
        `
    );
    const ifm = document.getElementById('calendarIframe');
    if ('darwin' === window.siyuan.config.system.os) {
        insertBtn('barSearch');
        ifm.style.right = '50px';
    } else {
        insertBtn('barBack');
        ifm.style.left = '50px';
    }

    ifm.onload = function () {
        let iDoc = ifm.contentDocument || ifm.document;
        ifm.style.height = calcPageHeight(iDoc);
    };

    const btn = document.getElementById('calendar');
    if (btn) {
        btn.innerHTML = `<svg t="1662957805816" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2374" width="200" height="200"><path d="M797.257 402.286h-570.514v113.371h570.514v-113.371zM910.629 76.8h-58.514v-76.8h-113.371v76.8h-453.486v-76.8h-113.371v76.8h-58.514c-62.171 0-113.371 51.2-113.371 113.371v724.114c0 62.171 51.2 109.714 113.371 109.714h797.257c62.171 0 113.371-47.543 113.371-109.714v-724.114c0-62.171-51.2-113.371-113.371-113.371zM910.629 914.286h-797.257v-625.371h797.257v625.371zM625.371 629.029h-398.629v113.371h398.629v-113.371z"></path></svg>`;

        btn.addEventListener(
            'click',
            function (e) {
                e.stopPropagation();
                if (ifm.style.visibility === 'hidden') {
                    ifm.style.visibility = 'visible';
                } else {
                    ifm.style.visibility = 'hidden';
                }
            },
            false
        );
    }

    // 点击其他区域时，隐藏日历面板
    window.addEventListener(
        'click',
        () => {
            if (ifm.style.visibility === 'visible') {
                ifm.style.visibility = 'hidden';
            }
        },
        false
    );
}

export function calendarMain() {
    try {
        if (config.app.calendar) {
            initCalendar();
        }
    } catch (error) {
        console.error(error);
    }
}

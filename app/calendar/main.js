function insertBtn(elementId) {
    // 把日历图标 放到 {{elementId}} 图标前面
    const element = document.getElementById(elementId)
    if (element) {
        element.insertAdjacentHTML(
            'beforebegin',
            `<div id="calendar" class="toolbar__item b3-tooltips b3-tooltips__se" aria-label="日历" ></div>`
        )
    }
}

// 计算页面的实际高度，iframe自适应会用到
function calcPageHeight(doc) {
    var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
    var height = Math.max(cHeight, sHeight) + 15
    return height + 'px'
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
            src="/appearance/themes/Rem Craft/app/calendar/dist"
        />
        `
    )
    const ifm = document.getElementById('calendarIframe')
    if ('darwin' === window.siyuan.config.system.os) {
        insertBtn('barSearch')
        ifm.style.right = '50px'
    } else {
        insertBtn('barBack')
        ifm.style.left = '50px'
    }

    ifm.onload = function () {
        let iDoc = ifm.contentDocument || ifm.document
        ifm.style.height = calcPageHeight(iDoc)
    }

    const btn = document.getElementById('calendar')
    if (btn) {
        btn.innerHTML = '<svg><use xlink:href="#iconCalendar"></use></svg>'
        btn.addEventListener(
            'click',
            function (e) {
                e.stopPropagation()
                if (ifm.style.visibility === 'hidden') {
                    ifm.style.visibility = 'visible'
                } else {
                    ifm.style.visibility = 'hidden'
                }
            },
            false
        )
    }

    // 点击其他区域时，隐藏日历面板
    window.addEventListener(
        'click',
        () => {
            if (ifm.style.visibility === 'visible') {
                ifm.style.visibility = 'hidden'
            }
        },
        false
    )
}

export function calendarMain() {
    try {
        initCalendar()
    } catch (error) {
        console.error(error)
    }
}

import { isFullScreen } from './../utils/winutil.js';

function autoSetBorders() {
    let body = document.body;
    setTimeout(() => {
        let borderedBody = document.querySelector("body.body--win32");
        if (isFullScreen()) {
            borderedBody.style.border = "0px solid var(--b3-border-color)";
            // console.log("maximized.");
        } else {
            borderedBody.style.border = "1px solid var(--b3-border-color)";
            // console.log("normaled.");
        }
    }, 1); // 这里的延迟是为了让 isFullScreen() 函数能够正确获取到窗口的状态，否则效果会完全相反
}

(() => {
    let body = document.body;
    window.addEventListener('resize', (e) => {
        // console.log('border set');
        autoSetBorders();
    });
})();

autoSetBorders();

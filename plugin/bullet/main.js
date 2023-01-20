import { config } from '../../script/config.js';
import { prefix } from '../../util/layout.js';

/**
 * 获得指定块位于的编辑区
 * @params {HTMLElement}
 * @return {HTMLElement} 光标所在块位于的编辑区
 * @return {null} 光标不在块内
 */
function getTargetEditor(block) {
    while (block != null && !block.classList.contains('protyle-wysiwyg')) block = block.parentElement;
    return block;
}

/**
 * 获得焦点所在的块
 * @return {HTMLElement} 光标所在块
 * @return {null} 光标不在块内
 */
function getFocusedBlock() {
    if (document.activeElement.classList.contains('protyle-wysiwyg')) {
        let block = window.getSelection()?.focusNode?.parentElement; // 当前光标
        while (block != null && block.dataset.nodeId == null) block = block.parentElement;
        return block;
    }
}

function focusHandler() {
    /* 获取当前编辑区 */
    let block = getFocusedBlock(); // 当前光标所在块
    /* 当前块已经设置焦点 */
    if (block?.classList.contains(`${prefix}-focus`)) return;

    /* 当前块未设置焦点 */
    const editor = getTargetEditor(block); // 当前光标所在块位于的编辑区
    if (editor) {
        editor.querySelectorAll(`.${prefix}-focus`).forEach((element) => element.classList.remove(`${prefix}-focus`));
        block.classList.add(`${prefix}-focus`);
        // setSelector(block);
    }
}

export function bulletMain() {
    // 跟踪当前所在块
    if (config.plugin.bullet) {
        window.addEventListener('mouseup', focusHandler, true);
        window.addEventListener('keyup', focusHandler, true);
    }
}

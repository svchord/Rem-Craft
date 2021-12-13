# Rem Craft

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/release/zqhjl/Rem-Craft?include_prereleases)
![GitHub](https://img.shields.io/github/license/zqhjl/Rem-Craft)
![GitHub last commit](https://img.shields.io/github/last-commit/zqhjl/Rem-Craft)
![GitHub repo size](https://img.shields.io/github/repo-size/zqhjl/Rem-Craft)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/zqhjl/Rem-Craft?label=hits)

一款思源笔记软件的自用主题

——的**草稿**。

![预览图](preview.png)

## 样式参考

以下是已修改样式：

- VS Code 的顶栏
- Craft 的边栏、呼出菜单
- Rem Note 的文档树
- Notion 的面包屑
- Logseq 的页签
- Notion 的编辑器各类块

## 注意

该主题是自用，因此有部分对其他用户来说可能过于激进的变更，如果你希望取消以下更改，需要了解[自定义步骤](#自定义步骤)后进行[取消更改操作](#取消更改操作)：

1. 设置、搜索、笔记本设置等大宽度菜单的关闭键被隐藏（点击菜单四周的空白处即可关闭）
2. 超链接的锚文本编辑功能被隐藏（可直接在编辑器内编辑）
3. 编辑器输入区域的宽度写死了，目前为46.9vw

## 自定义步骤

1. 使用 VS Code 编辑器，下载并安装`Live Sass Compiler`插件
2. 在设置文件`settings.json`中写入以下代码
   ```json
   "liveSassCompile.settings.formats": [
        // 扩展
        {
            "format": "compressed", //可定制的出口CSS样式（expanded，compact，compressed，nested）
            "extensionName": ".css", //编译后缀名
            "savePath": "/" //编译保存的路径
        }
    ],
    "liveSassCompile.settings.generateMap": false,
    "liveSassCompile.settings.excludeList": [
        "**/node_modules/**",
        ".vscode/**"
    ],
    "liveSassCompile.settings.includeItems": [
        "src/styles/theme.scss"
    ]
   ```
3. 克隆[本仓库](https://github.com/zqhjl/Rem-Craft)到本地，并更换到`dev`分支（此步骤建议使用 Github Desktop）
4. 查看[_variables.scss](/src/styles/components/_variables.scss)文件，其中包含了所有更改样式的相关颜色和部分共用样式，请按照自己的需求自行修改
5. 点击编辑器底部的`Watch Sass`按钮，等待编译
6. 将编译后的`theme.css`文件替换主题文件夹中的同名文件

## 取消更改操作

以下相关操作与[激进变更](#注意)按序号对应：

1. 相关代码在[_dialog.scss](/src/styles/components/surface/_dialog.scss)文件中，结构如下所示，注释后编译即可取消
     ```css
    .b3-dialog__close {
      display: none;
    }
    ```
2. 相关代码在[_util.scss](src/styles/components/editor/_util.scss)文件中，结构如下所示，注释后编译即可取消
    ```css
    &[style*="width"] {
      ...
    }
    ```
3. 可通过修改[_variables.scss](/src/styles/components/_variables.scss)文件中的`$rc-editor-width`变量调整

> 以上就是本菜鸡摸索出来的流程，也许之后我会开发一个主题自定义挂件，应该就不需要这么多复杂的步骤了…不过估计使用该主题的人不多，所以应该会鸽很久

## 更改日志

[CHANGELOG](src/docs/CHANGELOG.md)
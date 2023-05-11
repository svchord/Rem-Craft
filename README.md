# Rem Craft

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/release/svchord/Rem-Craft?include_prereleases)
![GitHub](https://img.shields.io/github/license/svchord/Rem-Craft)
![GitHub last commit](https://img.shields.io/github/last-commit/svchord/Rem-Craft)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/svchord/Rem-Craft?label=hits)

简体中文 \| [English](README_en_US.md)

---

一款现代化、扁平化设计的思源笔记主题

<img width="1280" alt="preview" src="https://user-images.githubusercontent.com/61345763/203089325-75a4d1c7-9b59-43a1-b98d-9c1bb0dcd63e.png">

## 使用说明

### 最新

1. 删除了主题自带的日历功能，并适配了[日历插件](https://github.com/svchord/siyuan-arco-calendar)的样式

### 其他

1. v2.5.2及之后版本均不再内置 `Noto Sans SC` 字体文件，有需求请往[官网](https://fonts.google.com/noto/specimen/Noto+Sans+SC)下载

2. `script/config.js` 可以设置主题特殊功能的启用与否，默认启用，将值修改为 `false` 并重启软件即可关闭

3. 顶栏除了按钮以外的区域都可以拖拽窗口

4. 极端情况下，页签栏可能会被顶栏按钮覆盖，重启软件即可解决

5. 设置、搜索等大弹窗的关闭按钮被隐藏了，点击周围空白处即可关闭

## 参考样式

以下是主要样式设计来源：

- 参考了 Windows 11 的设计，修改了边栏、滑条、开关、输入框的样式
  
  ![windows 11](https://docs.microsoft.com/en-us/windows/apps/design/signature-experiences/images/color_light_controls_940.png)

- 参考了[TDesign](https://tdesign.tencent.com/)的设计系统，统一了颜色、线条、圆角等变量
  
  ![starter 252d54e0](https://user-images.githubusercontent.com/61345763/176590115-93fa2d29-a975-4a89-904c-6ba94295d3ee.png)

- Notion 的题头图、编辑器各类块

- Obsidian 的顶栏、页签栏

- Rem Note 的文档树

- VS Code 的 One Dark Pro 配色

- Craft 的引述块

## Roadmap

### 短期计划

1. theme-plugins：用户自定义使用主题特殊功能。
2. themes：用户自定义主题风格和主题色，主题自带 tdesign 和 one-dark 两种风格。
3. Admonitions：也叫 call-out，即各类定义好的引述模板。[（参考链接）](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)

### 长期计划

1. 图片、pdf 浏览界面美化

## 参考与致谢

| 功能                   | 作者/项目                                                                                                                                                           | 说明                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 行内超链接自动展示图标 | [Achuan-2/Tsundoku Light](https://github.com/Achuan-2/siyuan-themes-tsundoku-light)、[Zuoqiu-Yingyi/Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus) | 将两个主题的相同功能整合在一起 |
| 明暗切换               | [Zuoqiu-Yingyi/Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)                                                                                      | 参考部分 theme.js              |
| 斜杠快捷菜单分列显示   | [Zuoqiu-Yingyi/Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)、[royc01/notion-theme](https://github.com/royc01/notion-theme)                       | 将两个主题的相同功能整合在一起 |
| 文档树辅助线           | [royc01/notion-theme](https://github.com/royc01/notion-theme)                                                                                                       | 群聊中交流讨论提供思路         |
| 顶部页签栏             | [royc01/notion-theme](https://github.com/royc01/notion-theme)                                                                                                       | 提供顶栏下沉的思路             |
| theme.js 写法和 api    | [leolee9086/noob](https://github.com/leolee9086/noob)                                                                                                               | 参考部分 theme.js              |
| 日历面板               | [论坛帖子](https://ld246.com/article/1662969146166)                                                                                                                 | 整合社区实现                   |
| 行内评论               | [langzhou/siyuan-comment](https://github.com/langzhou/siyuan-note/tree/main/siyuan-comment)                                                                         | 整合社区实现                   |
| 子弹穿线               | [Zuoqiu-Yingyi/Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)、[pengx17/logseq-dev-theme](https://github.com/pengx17/logseq-dev-theme)             | 将两个主题的相同功能整合在一起 |

## 依赖项目

- [GitHub - siyuan-note/siyuan: SiYuan is a local-first personal knowledge management system, supports fine-grained block-level reference, and Markdown WYSIWYG.](https://github.com/siyuan-note/siyuan)  `AGPL-3.0 license`

- [GitHub - sass/sass: Sass makes CSS fun!](https://github.com/sass/sass) `MIT license`

- [GitHub - conventional-changelog/standard-version: Automate versioning and CHANGELOG generation, with semver.org and conventionalcommits.org](https://github.com/conventional-changelog/standard-version) `ISC license`

- [GitHub - Zhengqbbb/cz-git: cz-git | czg 🔨 More engineered, lightweight, customizable, standard output format commitizen adapter and CLI](https://github.com/Zhengqbbb/cz-git) `MIT license`

## 版本日志

[CHANGELOG](CHANGELOG.md)

# Rem Craft

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/release/svchord/Rem-Craft?include_prereleases)
![GitHub](https://img.shields.io/github/license/svchord/Rem-Craft)
![GitHub last commit](https://img.shields.io/github/last-commit/svchord/Rem-Craft)
![GitHub repo size](https://img.shields.io/github/repo-size/svchord/Rem-Craft)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/svchord/Rem-Craft?label=hits)

一款现代化、平面化设计的思源笔记主题

<img width="1280" alt="preview" src="https://user-images.githubusercontent.com/61345763/196183604-5b2e7706-feb9-4cd7-aa73-f35c3c4a484a.png">

## 使用说明

1. 顶部页签栏仅支持横向分屏
2. 顶栏除了按钮以外的区域都可以拖拽窗口
3. 横向分屏三栏及以上时，顶部右侧页签栏会随着面板焦点的变化而改变（仅包括从左往右数第二个面板及其右侧面板），同时右侧页签栏的空白区域拖拽会有问题，因此不建议横向分屏三栏及以上
4. 设置、搜索等大弹窗的关闭按钮被隐藏了，点击周围空白处即可关闭

## 参考样式

以下是主要样式设计来源：

- 参考了Windows 11的设计，修改了边栏、滑条、开关、输入框的样式
  
  ![windows 11](https://docs.microsoft.com/en-us/windows/apps/design/signature-experiences/images/color_light_controls_940.png)

- 参考了[TDesign](https://tdesign.tencent.com/)的设计系统，统一了颜色、线条、圆角等变量
  
  ![starter 252d54e0](https://user-images.githubusercontent.com/61345763/176590115-93fa2d29-a975-4a89-904c-6ba94295d3ee.png)

- Notion 的题头图、编辑器各类块

- Obsidian 的顶栏和底部状态栏

- Rem Note 的文档树

- VS Code 的 One Dark Pro 配色

- Microsoft Edge 的页签

- Craft 的引述块

## Roadmap

### 短期计划

1. mini-plugins：用户自定义使用css片段，完善css片段版本、作者及功能描述等信息，方便后期维护。
2. themes：用户自定义主题风格和主题色，主题自带tdesign、semi-design及one-dark三种风格。
3. Admonitions：也叫call-out，即各类定义好的引述模板。[（参考链接）](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)

### 长期计划

1. 列表转导图等额外辅助功能
2. 图片、pdf浏览界面美化

## 参考与致谢

| 功能          | 作者                                                                                         | 项目                                                                                                                                          | 说明              |
| ----------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| 行内超链接自动展示图标 | [Achuan-2](https://github.com/Achuan-2)、[Zuoqiu-Yingyi](https://github.com/Zuoqiu-Yingyi/) | [Tsundoku Light](https://github.com/Achuan-2/siyuan-themes-tsundoku-light)、[Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus) | 将两个主题的相同功能整合在一起 |
| 明暗切换        | [Zuoqiu-Yingyi](https://github.com/Zuoqiu-Yingyi/)                                         | [Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)                                                                            | 参考部分theme.js    |
| 斜杠快捷菜单分列显示  | [Zuoqiu-Yingyi](https://github.com/Zuoqiu-Yingyi/)、[royc01](https://github.com/royc01)     | [Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)、[notion-theme](https://github.com/royc01/notion-theme)                     | 将两个主题的相同功能整合在一起 |
| 文档树辅助线      | [royc01](https://github.com/royc01)                                                        | [notion-theme](https://github.com/royc01/notion-theme)                                                                                      | 群聊中交流讨论提供思路     |

## 依赖项目

- [GitHub - siyuan-note/siyuan: SiYuan is a local-first personal knowledge management system, supports fine-grained block-level reference, and Markdown WYSIWYG.](https://github.com/siyuan-note/siyuan)  `AGPL-3.0 license`

- [GitHub - sass/sass: Sass makes CSS fun!](https://github.com/sass/sass) `MIT license`

- [GitHub - conventional-changelog/standard-version: Automate versioning and CHANGELOG generation, with semver.org and conventionalcommits.org](https://github.com/conventional-changelog/standard-version) `ISC license`

- [GitHub - Zhengqbbb/cz-git: cz-git | czg 🔨 More engineered, lightweight, customizable, standard output format commitizen adapter and CLI](https://github.com/Zhengqbbb/cz-git) `MIT license`

## 版本日志

[CHANGELOG](CHANGELOG.md)

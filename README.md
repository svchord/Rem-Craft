# Rem Craft

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/release/svchord/Rem-Craft?include_prereleases)  
![GitHub](https://img.shields.io/github/license/svchord/Rem-Craft)  
![GitHub last commit](https://img.shields.io/github/last-commit/svchord/Rem-Craft)  
![GitHub repo size](https://img.shields.io/github/repo-size/svchord/Rem-Craft)  
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/svchord/Rem-Craft?label=hits)

一款现代化、平面化设计的思源笔记主题

<img width="1280" alt="preview" src="https://user-images.githubusercontent.com/61345763/200185990-01df147a-b54d-4ae2-a68d-f5739adfd64b.png">

## 使用说明

1. 顶栏除了按钮以外的区域都可以拖拽窗口
2. 打开边栏时，顶部页签栏有可能遮盖顶栏按钮，拖拽分割线即可解决
3. 多次分屏后，页签栏有概率出现现实问题，重置外观即可解决
4. 设置、搜索等大弹窗的关闭按钮被隐藏了，点击周围空白处即可关闭

## 参考样式

以下是主要样式设计来源：

- 参考了 Windows 11 的设计，修改了边栏、滑条、开关、输入框的样式
  
  ![windows 11](https://docs.microsoft.com/en-us/windows/apps/design/signature-experiences/images/color_light_controls_940.png)

- 参考了[TDesign](https://tdesign.tencent.com/)的设计系统，统一了颜色、线条、圆角等变量
  
  ![starter 252d54e0](https://user-images.githubusercontent.com/61345763/176590115-93fa2d29-a975-4a89-904c-6ba94295d3ee.png)

- Notion 的题头图、编辑器各类块

- Obsidian 的顶栏、页签栏和底部状态栏

- Rem Note 的文档树

- VS Code 的 One Dark Pro 配色

- Craft 的引述块

## Roadmap

### 短期计划

1. mini-plugins：用户自定义使用 css 片段，完善 css 片段版本、作者及功能描述等信息，方便后期维护。
2. themes：用户自定义主题风格和主题色，主题自带 tdesign、semi-design 及 one-dark 三种风格。
3. Admonitions：也叫 call-out，即各类定义好的引述模板。[（参考链接）](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)

### 长期计划

1. 列表转导图等额外辅助功能
2. 图片、pdf 浏览界面美化

## 参考与致谢

| 功能               | 作者                                                                                         | 项目                                                                                                                                          | 说明              |
| ---------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| 行内超链接自动展示图标      | [Achuan-2](https://github.com/Achuan-2)、[Zuoqiu-Yingyi](https://github.com/Zuoqiu-Yingyi/) | [Tsundoku Light](https://github.com/Achuan-2/siyuan-themes-tsundoku-light)、[Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus) | 将两个主题的相同功能整合在一起 |
| 明暗切换             | [Zuoqiu-Yingyi](https://github.com/Zuoqiu-Yingyi/)                                         | [Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)                                                                            | 参考部分 theme.js   |
| 斜杠快捷菜单分列显示       | [Zuoqiu-Yingyi](https://github.com/Zuoqiu-Yingyi/)、[royc01](https://github.com/royc01)     | [Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)、[notion-theme](https://github.com/royc01/notion-theme)                     | 将两个主题的相同功能整合在一起 |
| 文档树辅助线           | [royc01](https://github.com/royc01)                                                        | [notion-theme](https://github.com/royc01/notion-theme)                                                                                      | 群聊中交流讨论提供思路     |
| 顶部页签栏            | [royc01](https://github.com/royc01)                                                        | [notion-theme](https://github.com/royc01/notion-theme)                                                                                      | 顶栏提供思路          |
| theme.js 写法和 api | [leolee9086](https://github.com/leolee9086)                                                | [noob](https://github.com/leolee9086/noob)                                                                                                  | 参考部分 theme.js   |

## 依赖项目

- [GitHub - siyuan-note/siyuan: SiYuan is a local-first personal knowledge management system, supports fine-grained block-level reference, and Markdown WYSIWYG.](https://github.com/siyuan-note/siyuan)  `AGPL-3.0 license`

- [GitHub - sass/sass: Sass makes CSS fun!](https://github.com/sass/sass) `MIT license`

- [GitHub - conventional-changelog/standard-version: Automate versioning and CHANGELOG generation, with semver.org and conventionalcommits.org](https://github.com/conventional-changelog/standard-version) `ISC license`

- [GitHub - Zhengqbbb/cz-git: cz-git | czg 🔨 More engineered, lightweight, customizable, standard output format commitizen adapter and CLI](https://github.com/Zhengqbbb/cz-git) `MIT license`

## 版本日志

[CHANGELOG](CHANGELOG.md)

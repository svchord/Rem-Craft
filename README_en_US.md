# Rem Craft

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/release/svchord/Rem-Craft?include_prereleases)
![GitHub](https://img.shields.io/github/license/svchord/Rem-Craft)
![GitHub last commit](https://img.shields.io/github/last-commit/svchord/Rem-Craft)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/svchord/Rem-Craft?label=hits)

[简体中文](README.md) \| English

---

A modern, flat design siyuan note theme.

<img width="1280" alt="preview" src="https://user-images.githubusercontent.com/61345763/203089325-75a4d1c7-9b59-43a1-b98d-9c1bb0dcd63e.png">

## Instructions for Use

### Up to Date

1. Deleted the calendar function that comes with the theme, and adapted the style of the [calendar plugin](https://github.com/svchord/siyuan-arco-calendar).

### Other

1. `Noto Sans SC` font files are no longer included in v2.5.2 and later versions, please go to the [official website](https://fonts.google.com/noto/specimen/Noto+Sans+SC) to download if you need it.

2. `script/config.js` can set whether the special function of the theme is enabled or not, it is enabled by default, modify the value to `false` and restart the software to close.

3. The area of the top bar except the button can drag the window.

4. In extreme cases, the tab bar may be covered by the top bar button, restarting the software can solve the problem.

5. The close buttons of large pop-up windows such as settings and search are hidden, click the surrounding blank space to close.

## Reference Style

Here are the main styling sources:

- Referring to the design of Windows 11, the styles of sidebars, sliders, switches, and input boxes have been modified
  
  ![windows 11](https://docs.microsoft.com/en-us/windows/apps/design/signature-experiences/images/color_light_controls_940.png)

- Referring to [TDesign](https://tdesign.tencent.com/)'s design system, unifying variables such as colors, lines, and rounded corners.
  
  ![starter 252d54e0](https://user-images.githubusercontent.com/61345763/176590115-93fa2d29-a975-4a89-904c-6ba94295d3ee.png)

- Notion's header image, various editor blocks

- Obsidian's top bar, tab bar

- Rem Note's document tree

- One Dark Pro color scheme for VS Code

- Craft's quote block

## Roadmap

### Short Term Plan

1. theme-plugins: User-defined using theme special features.
2. themes: user-defined theme style and theme color, the theme comes with tdesign and one-dark two styles.
3. Admonitions: also called call-out, that is, various defined quotation templates.[(reference link)](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)

### Long Term Plan

1. Picture, pdf browsing interface beautification
   References and Acknowledgments.

## 参考与致谢

| Feature                                         | Author/Project                                                                                                                                                      | Description                                              |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Auto-display icons for inline hyperlinks        | [Achuan-2/Tsundoku Light](https://github.com/Achuan-2/siyuan-themes-tsundoku-light)、[Zuoqiu-Yingyi/Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus) | Integrate the same functionality of two themes together  |
| Toggle between light and dark                   | [Zuoqiu-Yingyi/Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)                                                                                      | Reference section theme.js                               |
| The slash shortcut menu is displayed in columns | [Zuoqiu-Yingyi/Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)、[royc01/notion-theme](https://github.com/royc01/notion-theme)                       | Integrate the same functionality of two themes together  |
| Document Tree Guides                            | [royc01/notion-theme](https://github.com/royc01/notion-theme)                                                                                                       | Provide ideas for exchange and discussion in group chats |
| Top tab bar                                     | [royc01/notion-theme](https://github.com/royc01/notion-theme)                                                                                                       | Provide the idea of sinking the top bar                  |
| theme.js writing method and api                 | [leolee9086/noob](https://github.com/leolee9086/noob)                                                                                                               | Reference section theme.js                               |
| Calendar panel                                  | [forum post](https://ld246.com/article/1662969146166)                                                                                                               | Integrated community implementation                      |
| Insider Reviews                                 | [langzhou/siyuan-comment](https://github.com/langzhou/siyuan-note/tree/main/siyuan-comment)                                                                         | Integrated community implementation                      |
| bullet threading                                | [Zuoqiu-Yingyi/Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)、[pengx17/logseq-dev-theme](https://github.com/pengx17/logseq-dev-theme)             | Integrate the same functionality of two themes together  |

## Dependent Project

- [GitHub - siyuan-note/siyuan: SiYuan is a local-first personal knowledge management system, supports fine-grained block-level reference, and Markdown WYSIWYG.](https://github.com/siyuan-note/siyuan)  `AGPL-3.0 license`

- [GitHub - sass/sass: Sass makes CSS fun!](https://github.com/sass/sass) `MIT license`

- [GitHub - conventional-changelog/standard-version: Automate versioning and CHANGELOG generation, with semver.org and conventionalcommits.org](https://github.com/conventional-changelog/standard-version) `ISC license`

- [GitHub - Zhengqbbb/cz-git: cz-git | czg 🔨 More engineered, lightweight, customizable, standard output format commitizen adapter and CLI](https://github.com/Zhengqbbb/cz-git) `MIT license`

## Changelog

[CHANGELOG](CHANGELOG.md)

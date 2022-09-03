// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require("child_process");

// @tip: git branch name = feature/issue_33   =>    auto get defaultIssues = #33
const issue = execSync("git rev-parse --abbrev-ref HEAD")
  .toString()
  .trim()
  .split("_")[1];

/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
  },
  prompt: {
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixsSelect: "选择关联issue前缀（可选）:",
      customFooterPrefixs: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: [
      {
        value: "feat",
        name: "feat:     ✨  新增功能 | A new feature",
        emoji: ":sparkles:",
      },
      {
        value: "fix",
        name: "fix:      🐛  修复缺陷 | A bug fix",
        emoji: ":bug:",
      },
      {
        value: "docs",
        name: "docs:     📝  文档更新 | Documentation only changes",
        emoji: ":memo:",
      },
      {
        value: "style",
        name: "style:    💄  代码格式 | Changes that do not affect the meaning of the code",
        emoji: ":lipstick:",
      },
      {
        value: "refactor",
        name: "refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature",
        emoji: ":recycle:",
      },
      {
        value: "perf",
        name: "perf:     ⚡️  性能提升 | A code change that improves performance",
        emoji: ":zap:",
      },
      {
        value: "test",
        name: "test:     ✅  测试相关 | Adding missing tests or correcting existing tests",
        emoji: ":white_check_mark:",
      },
      {
        value: "build",
        name: "build:    📦️  构建相关 | Changes that affect the build system or external dependencies",
        emoji: ":package:",
      },
      {
        value: "ci",
        name: "ci:       🎡  持续集成 | Changes to our CI configuration files and scripts",
        emoji: ":ferris_wheel:",
      },
      {
        value: "chore",
        name: "chore:    🔨  其他修改 | Other changes that don't modify src or test files",
        emoji: ":hammer:",
      },
      {
        value: "revert",
        name: "revert:   ⏪️  回退代码 | Reverts a previous commit",
        emoji: ":rewind:",
      },
    ],
    useEmoji: true,
    themeColorCode: "",
    scopes: [
      { value: "components", name: "components:    组件相关" },
      { value: "layout", name: "layout:        layout 相关" },
      { value: "pages", name: "pages:         pages 相关" },
      { value: "utils", name: "utils:         utils 相关" },
      { value: "deps", name: "deps:          项目依赖" },
      { value: "other", name: "other:         其他修改" },
    ],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: true,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [
      // 如果使用 gitee 作为开发管理
      { value: "link", name: "link:     链接 ISSUES 进行中" },
      { value: "closed", name: "closed:   标记 ISSUES 已完成" },
    ],
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultScope: "",
    defaultSubject: "",

    customScopesAlign: "top-bottom",
    customScopesAlias: "custom:        以上都不是？我要自定义",
    customIssuePrefixsAlign: !issue ? "top" : "bottom",
    defaultIssues: !issue ? "" : `#${issue}`,
  },
};

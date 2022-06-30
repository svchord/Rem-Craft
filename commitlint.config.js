// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

// @tip: git branch name = feature/issue_33   =>    auto get defaultIssues = #33
const issue = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim()
    .split('_')[1];
/** @type {import('cz-git').UserConfig} */
module.exports = {
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
        'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 108],
        'subject-empty': [2, 'never'],
        'type-empty': [2, 'never'],
        'subject-case': [0],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'perf',
                'style',
                'docs',
                'test',
                'refactor',
                'build',
                'ci',
                'chore',
                'revert',
                'wip',
                'types',
                'release',
            ],
        ],
    },
    prompt: {
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围（可选）:',
            customScope: '请输入自定义的提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
            footerPrefixsSelect: '选择关联issue前缀（可选）:',
            customFooterPrefixs: '输入自定义issue前缀 :',
            footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
            confirmCommit: '是否提交或修改commit ?',
        },
        types: [
            {
                value: 'feat',
                name: 'feat:     ✨  增加新功能',
                emoji: ':sparkles:',
            },
            {
                value: 'fix',
                name: 'fix:      🐛  修复缺陷',
                emoji: ':bug:',
            },
            {
                value: 'types',
                name: 'types:    🏷️   类型修改',
                emoji: ':label:',
            },
            {
                value: 'docs',
                name: 'docs:     📝  文档变更',
                emoji: ':memo:',
            },
            {
                value: 'perf',
                name: 'perf:     ⚡️  性能优化',
                emoji: ':zap:',
            },
            {
                value: 'style',
                name: 'style:    💄  代码格式（不影响功能，例如空格、分号等格式修正）',
                emoji: ':lipstick:',
            },
            {
                value: 'refactor',
                name: 'refactor: ♻️   代码重构（不包括 bug 修复、功能新增）',
                emoji: ':recycle:',
            },
            {
                value: 'test',
                name: 'test:     ✅  添加疏漏测试或已有测试改动',
                emoji: ':white_check_mark:',
            },

            {
                value: 'build',
                name: 'build:    📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
                emoji: ':package:',
            },
            {
                value: 'ci',
                name: 'ci:       🎡  修改 CI 配置、脚本',
                emoji: ':ferris_wheel:',
            },
            {
                value: 'revert',
                name: 'revert:   ⏪️  回滚 commit',
                emoji: ':rewind:',
            },

            {
                value: 'wip',
                name: 'wip:      🚧  功能开发中',
                emoji: ':construction:',
            },

            {
                value: 'chore',
                name: 'chore:    🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
                emoji: ':hammer:',
            },
        ],
        scopes: [
            { value: 'components', name: 'components:    组件相关' },
            { value: 'hooks', name: 'hooks:         hooks 相关' },
            { value: 'utils', name: 'utils:         utils 相关' },
            { value: 'styles', name: 'styles:        对样式的调整' },
            { value: 'deps', name: 'deps:          项目依赖' },
            { value: 'apis', name: 'apis:          apis 相关' },
            { value: 'stores', name: 'stores:        stores 相关' },
            { value: 'types', name: 'types:         types 相关' },
            { value: 'other', name: 'other:         其他修改' },
        ],
        useEmoji: true,
        customScopesAlign: 'top-bottom',
        customScopesAlias: 'custom:        以上都不是？我要自定义',
        allowBreakingChanges: ['feat', 'fix'],
        issuePrefixs: [
            { value: 'link', name: 'link:     链接 ISSUES 进行中' },
            { value: 'closed', name: 'closed:   标记 ISSUES 已完成' },
        ],
        customIssuePrefixsAlign: !issue ? 'top' : 'bottom',
        defaultIssues: !issue ? '' : `#${issue}`,
    },
};
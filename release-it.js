module.exports = {
    "plugins": {
        "@release-it/conventional-changelog": {
            "preset": {
                "name": "conventionalcommits",
                "types": [
                    {
                        "type": "feat",
                        "section": "✨ Features | 新功能"
                    },
                    {
                        "type": "fix",
                        "section": "🐛 Bug Fixes | Bug 修复"
                    }
                ]
            },
            "infile": "CHANGELOG.md"
        }
    },
    "hooks": {
        "after:bump": "npm run update-theme-version"
    }
}
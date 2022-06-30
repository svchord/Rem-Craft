const fs = require('fs')
const path = require('path')

const resolve = (p) => path.resolve(__dirname, p)

const pkg = JSON.parse(fs.readFileSync(resolve('../package.json'), { encoding: 'utf-8' }))
const theme = JSON.parse(fs.readFileSync(resolve('../theme.json'), { encoding: 'utf-8' }))

console.log("__:🍥🍥🍥:Previous version:🍥🍥🍥:____")
console.log("pkg::", pkg.version)
console.log("theme::", theme.version)

theme.version = pkg.version
fs.writeFileSync(resolve('../theme.json'), JSON.stringify(theme))
console.log("__:🍥🍥🍥:Current version:🍥🍥🍥:____")
console.log("pkg::", JSON.parse(fs.readFileSync(resolve('../package.json'), { encoding: 'utf-8' })).version)
console.log("theme::", JSON.parse(fs.readFileSync(resolve('../theme.json'), { encoding: 'utf-8' })).version)
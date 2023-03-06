import { root, loadScript, checkVersion, addURLParam } from './util/resource.js';

export async function main() {
    let version = await checkVersion();
    loadScript(addURLParam(root + 'script/index.js', { v: version }));
    loadScript(addURLParam(root + 'plugin/index.js', { v: version }));
    loadScript(addURLParam(root + 'app/index.js', { v: version }));
}

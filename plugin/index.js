import { config } from '../script/config.js';
import { root, updateStyle, checkVersion, addURLParam } from '../util/resource.js';
import { fisrtToUpper } from '../util/convert.js';

import { tabBarMain } from './tabBar/main.js';
import { stautsMain } from './status/main.js';
import { bulletMain } from './bullet/main.js';

const pluginRoot = root + 'plugin/';
const pluginConfig = config.plugin;

(async () => {
    tabBarMain();
    stautsMain();
    bulletMain();

    let version = await checkVersion();
    for (const [key, value] of Object.entries(pluginConfig)) {
        if (value) {
            updateStyle(
                `plugin${fisrtToUpper(key)}`,
                addURLParam(pluginRoot + key + '/main.css', { v: version })
            );
        }
    }
})();

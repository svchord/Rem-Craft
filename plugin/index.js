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

    try {
        let version = await checkVersion();
        for (const key in pluginConfig) {
            if (Object.hasOwnProperty.call(pluginConfig, key)) {
                if (pluginConfig[key]) {
                    updateStyle(
                        `plugin${fisrtToUpper(key)}`,
                        addURLParam(pluginRoot + key + '/main.css', { v: version })
                    );
                }
            }
        }
    } catch (e) {
        console.error(e);
    }
})();

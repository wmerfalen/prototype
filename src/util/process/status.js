let { env } = require('./env.js');
const S = {};
module.exports = S;

S.proc = {
    status: (...line) => {
        if(env?.verbose) {
            console.info(...line);
        }
    },
    debug: (...line) => {
        if(env?.debug) {
            console.debug(...line);
        }
    },
    log: (...line) => {
        if(env?.verbose) {
            console.log(...line);
        }
    },
};

S.__init_module = async (obj = null) => {
    if('undefined' !== typeof obj?.custom_config_file) {
        env = require(obj.custom_config_file);
    }else{
        env = require('./env.js');
    }
    console.debug(`proc status using env: `);
    console.debug(JSON.stringify(env,null,2));
};


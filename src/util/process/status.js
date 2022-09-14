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

S.__init_module = () => {
    env = require('./env.js').env;
};


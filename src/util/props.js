'use strict';
const P = {};
module.exports = P;
P.verify_props = (src, props) => {
    let missing = [];
    for(const p of props){
        if(typeof src[p] === 'undefined'){
            missing.push(p);
        }
    }
    return [missing.length === 0,missing];
};

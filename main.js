'use strict';
const Team = require('./src/team/create.js');
const World = require('./src/engine/world/');
const assert = require('assert').strict;

let actions = [
    //'bootstrap',
    //'run_world',
    //'create_world'
];

const { argv, exit, } = require('process');
const fs = require('fs');
const path = require('path');
async function get_version(){
    const version = await fs.readFileSync(path.resolve(__dirname,'version'));
    return version.toString().replace(/\s*$/,'');
}

const { verify_props } = require('./src/util/props.js');

async function usage(){
    const v = await get_version();
    console.log(`--[ Prototype Game Engine ](version: ${v})`);
    console.log(`Usage: node main.js [options] [run]`);
    console.log(``);
    console.log(`  --version -v      : print versions of dependencies and program version`);
    console.log(`  --help -h -? /?   : print this usage screen`);
    console.log(`  --create-world -c : create initial world`);
    console.log(`  --import-world=<json-file> : import world`);
    console.log(``);
    console.log(`Project URL: https://github.com/wmerfalen/prototype`);
    console.log(``);
    exit(0);
}
let argv_state = {};

argv.forEach((val, index) => {
    if(val.match(/^\-\-version/) || val.match(/^\-v$/)){
        actions.push('version');
    }
    if(index > 1 && val.match(/^run$/i)) {
        actions.push('bootstrap');
        actions.push('run_world');
    }
    if(
        val.match(/^\-\-help$/i) || 
        val.match(/^\-h$/i) ||
        val.match(/^\-\?/) ||
        val.match(/^\/\?/)){
        usage();
    }
    if(
        val.match(/^\-\-create\-world$/) ||
        val.match(/^\-c$/)
    ){
        actions.push('create_world');
    }
    let import_world = val.match(/^\-\-import\-world=(.*)$/);
    if(import_world){
        actions.push('bootstrap');
        actions.push('import_world');
        argv_state.import_world_file = path.resolve(import_world[1]);
    }
});

(async function(action){
    let world_instance = {};

    if(action.indexOf('version') !== -1){
        const pkg = require('./package-lock.json');
        for(const p in pkg.packages){
            if(p.length === 0){
                console.log(pkg.packages[p]);
            }
        }
        const v = await get_version();
        console.log(`Prototype Game Engine Version: ${v}`);
        exit(0);
    }

    if(action.indexOf('bootstrap') !== -1){
        /**
         * Initialize all orm objects
         */
        for(let loadable_module of [
            require('./src/engine/world/world.db.js'),
            require('./src/util/process/status.js'),
        ]){
            assert(Object.hasOwn(loadable_module,'__init_module'));
            loadable_module.__init_module();
        }
    }
    const { proc } = require('./src/util/process/status.js');

    if(action.indexOf('create_world') !== -1){
        const w = await World.create_world({
            vnum: 1,
            title: 'Outskirts of refuse',
            description: `The unfortunate beginning...`,
        });
    }
    if(action.indexOf('import_world') !== -1){
        const definition = require(argv_state.import_world_file);
        const valid = verify_props(definition,['vnum','title','description']);
        if(valid[0]){
            const w = await World.create_world(definition);
            console.log(`Imported world`);
            console.log(JSON.stringify(w,null,2));
        }else{
            console.error(`Error: import json file must have the following attributes:`);
            console.error(`vnum,title,description`);
            console.error(`Your import file is missing: ${JSON.stringify(valid[1],null,2)}`);
            exit(2);
        }
    }
    if(action.indexOf('run_world') !== -1){
        world_instance.db = await World.load_world(1);
        if(world_instance.db?.length && world_instance.db.length > 0){
            world_instance.db = world_instance.db[0];
        }
    }
	const r = await Team.run(require('./data/team/swat/0/'));
    proc.debug(JSON.stringify(r,null,2));
    proc.debug({world_instance});

})(
    actions
);

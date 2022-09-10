const Team = require('./src/team/create.js');
const World = require('./src/engine/world/');

(async function(action){
	const r = await Team.run(require('./data/team/swat/0/'));
    let world_instance = {};

    if(action.indexOf('create_world') !== -1){
        const w = await World.create_world({
            vnum: 1,
            title: 'Outskirts of refuse',
            description: `The unfortunate beginning...`,
        });
    }
    if(action.indexOf('run_world') !== -1){
        world_instance.db = await World.load_world(1);
        if(world_instance.db?.length && world_instance.db.length > 0){
            world_instance.db = world_instance.db[0];
        }
    }
    console.debug({world_instance});

})(
    [
        'run_world',
    ]
);

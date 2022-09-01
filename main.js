const Team = require('./src/team/create.js');
const World = require('./src/engine/world/');

(async function(){
	const r = await Team.run(require('./data/team/swat/0/'));
	console.log(r);

	const w = await World.create_world({
		vnum: 1,
		title: 'Outskirts of refuse',
		description: `The unfortunate beginning...`,
	});

})();

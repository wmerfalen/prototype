//const map = require('./map/');
//const rooms = require('./rooms/');
const world_orm = require('./world.db.js');

class World {
	#vnum = 0;
	#loaded = false;

	#title = null;
	#description = null;
	#zones = [];

	#orm_object = null;

	constructor(){
		console.debug(`World.constructor`);
	}

	load(vnum){
		this.orm_object = new world_orm();
		this.orm_object.load_by_vnum(vnum);

		this.title = this.orm_object.data.title;
		this.description = this.orm_object.data.description;
		this.zones = this.orm_object.data.zones;
		return this.loaded;
	}
}

const F = {};
module.exports = F;

F.create_world = async (...data) => {

};

const F = {};
module.exports = F;


class World {
	#vnum = 0;
	#loaded = false;

	#title = null;
	#description = null;
	#zones = [];

	#orm= null;

	constructor(){
	    this.debug(`World.constructor`);
        this.orm = require('./world.db.js');
        this.orm.__init_module();
        this.model = new this.orm.model();
	}

    debug(...line){
        console.debug(...line);
    }

	async load(vnum){
        this.vnum = vnum;
        this.loaded = false;
        const w = await this.orm.load_by_vnum(vnum);
        if(!w){
            this.loaded = false;
            throw new Error(`Unable to load world`);
        }
        this.loaded = true;
        this.title = w[0].title;
        this.description = w[0].description;
        return w;
	}
    async create(...data) {
        return await this.orm.create(...data);
    }
}

F.load_world = async (vnum) => {
    const W = new World();
    return await W.load(vnum);
};


F.create_world = async (...data) => {
    const W = new World();
    return await W.create(...data);
};

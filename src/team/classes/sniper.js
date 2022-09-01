'use strict';

class Individual {
	#vnum = 0;
	#type = null;
	#strength = 0;
	#dexterity = 0;
	#constitution = 0;
	#intelligence = 0;
	#wisdom = 0;
	#charisma = 0;
	
	constructor(vnum,type) {
		this.vnum = vnum;
		this.type = type;
	}

	get type(){
		return this.type;
	}

	get vnum(){
		return this.vnum;
	}

	attackUsing(weapon,target){

	}
}

module.exports = {
	Individual,
}

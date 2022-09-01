'use strict';

class Individual {
	#vnum = 0;
	#type = null;

	/**
	 * Attributes
	 */
	#strength = 0;
	#dexterity = 0;
	#constitution = 0;
	#intelligence = 0;
	#wisdom = 0;
	#charisma = 0;

	/**
	 * Basic info
	 */
	#first_name = null;
	#last_name = null;

	/**
	 * Abilities/Perks
	 */
	#perks = [];

	/**
	 * Class info
	 */
	#class_name = null;

	valid_attributes = [
		'vnum',
		'type',

		'strength',
		'dexterity',
		'constitution',
		'intelligence',
		'wisdom',
		'charisma',

		'first_name',
		'last_name',

		'perks',
		'class_name',
	];
	
	constructor(stats = null) {
		if(stats){
			this.set_stats(stats);
		}
	}

	set_stats(obj){
		for(const key in obj){
			if(this.valid_attributes.indexOf(key) === -1){
				console.warn(`Warning: ignoring key: "${key}" in set_stats`);
				continue;
			}
			this[key] = obj[key];
		}
	}

	attackUsing(weapon,target){

	}
}

module.exports = Individual;

'use strict';

class Individual {
	vnum = 0;
	type = null;

	/**
	 * Attributes
	 */
	strength = 0;
	dexterity = 0;
	constitution = 0;
	intelligence = 0;
	wisdom = 0;
	charisma = 0;

	/**
	 * Basic info
	 */
	first_name = null;
	last_name = null;

	/**
	 * Abilities/Perks
	 */
	perks = [];

	/**
	 * Class info
	 */
	class_name = null;

	constructor(stats = null) {
		if('object' === typeof stats && stats !== null){
            for(const key in stats){
                this[key] = stats[key];
            }
		}
	}

	attackUsing(weapon,target){

	}
}

module.exports = Individual;

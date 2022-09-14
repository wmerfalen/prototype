'use strict';

const Individual = require('../individual.js');

class Assaulter extends Individual {
	constructor(vnum,type) {
        super(vnum,type);
	}

	attackUsing(weapon,target){

	}
}

module.exports = Assaulter;

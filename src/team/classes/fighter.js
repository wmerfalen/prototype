'use strict';

const Individual = require('../individual.js');

class Fighter extends Individual {
	constructor(vnum,type) {
        super(vnum,type);
	}

	attackUsing(weapon,target){

	}
}

module.exports = Fighter;

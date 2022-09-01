'use strict';

const Create = module.exports;

const Individual = require('./individual.js');
const Team = require('./team.js');
const Perks = require('./perks.js');

Create.create = async (team_members) => {
	let team = [];
	for(const member of team_members) {
		team.push(new Individual(member));
	}
	return team;
};

Create.run = async (team) => {
	return await Create.create(team).catch(console.error);
};

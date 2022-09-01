'use strict';

const Perks = module.exports;

Perks.sniper_perks = async () => {
	return [
		'Ranged+5',
		'Evasion+2',
	];
};

Perks.assaulter_perks = async () => {
	return [
		'Proficient:AR',
		'Proficient:Breach',
	];
};

Perks.fighter_perks = async () => {
	return [
		'Strength+5',
		'Proficient:Leader',
	];
};


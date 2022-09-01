const SNIPER_VNUM = 1;
const ASSAULTER_VNUM = 2;
const FIGHTER_VNUM = 3;

module.exports = [
		{
			vnum: SNIPER_VNUM,
			strength: 5,
			constitution: 5,
			dexterity: 5,
			wisdom: 5,
			intelligence: 5,
			charisma: 5,
			class_name: 'sniper',
			first_name: 'Gopher',
			last_name: 'Mattix',
			perks: [
				'Ranged+5',
				'Evasion+2',
			],
		},
		{
			vnum: ASSAULTER_VNUM,
			strength: 5,
			constitution: 5,
			dexterity: 5,
			wisdom: 5,
			intelligence: 5,
			charisma: 5,
			class_name: 'assaulter',
			first_name: 'Proton',
			last_name: 'Dex',
			perks: [
				'Proficient:AR',
				'Proficient:Breach',
			],
		},
		{
			vnum: FIGHTER_VNUM,
			strength: 5,
			constitution: 5,
			dexterity: 5,
			wisdom: 5,
			intelligence: 5,
			charisma: 5,
			class_name: 'fighter',
			first_name: 'Fox',
			last_name: 'Plex',
			perks: [
				'Strength+5',
				'Proficient:Leader',
			],
		},
];

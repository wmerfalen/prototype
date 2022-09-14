# Feature roadmap
## Combat System v.1.0
	- Users get starter team
	- Users enter world
		- Can move around the world
		- Can accept Contracts
		- Missions contain randomized encounters with PvE enemies
	- Team size is 4 PC
	- NPC team size is 1-4
	- Missions
## Archetypes
	- Each PC has a unique class
		- Has abilities
		- Has perks
		- Has loadout
		- Has attachments
### Sniper
	- Abilities:
		- Bleed out
			- Accidentally "miss" the target's head and instead hit their body causing them to have BLEED for 3 rounds causing (2d6) damage per round
		- Support Shot
			- Call in a heli that fires an LMG burst at the front 2 or back 2 enemies
		- Recon shot
			- Fire a special projectile that injects dye that makes your targets ultra-visible
			- targets are 15% more likely to receive crits
			- Team gains %10 accuracy against marked targets for 2 rounds
### Breacher
	- Abilities:
		- Shelled out
			- Fire 2d2 shotgun shells at target dealing base weapon damage per shell
			- Target has -10% damage resistence for 3d2 rounds

### MCMAP Instructor
	- Abilities:
		- Muay Thai Teep From Hell
			- Run up to target and deliver a forceful teep kick dealing 3d5 damage
			- Target falls onto their back and misses their next turn
			- In 2 turns, target can get up, but is stunned for 2 turns
				- stunned enemies deal -20% damage
				- stunned enemies take +20% more damage
		- Clinch Warfare
			- Clinch target
				- choose one:
					- slicing elbow: 3d6, 2d3 bleed (2 rounds)
					- knee stomach: 3d10, target deals 10% less damage for 2 rounds
					- kosoto gake: 3d8, target on back, stunned for 2 turns
						- see: https://bnull.net/s/p/kosotogake.gif
					```
					- if((roll('1d10') + luck) > 7) {
						 // choose one extra technique
						}
					```
### 


## Archetypes
	- Each PC has a unique class
		- Has abilities
		- Has perks
		- Has loadout
		- Has attachments
### Long Range Ballistics
	- Abilities:
		- Bleed out
			- Accidentally "miss" the target's head and instead hit their body causing them to have BLEED for 3 rounds causing (2d6) damage per round
		- Support Shot
			- Call in a heli that fires an LMG burst at the front 2 or back 2 enemies
		- Recon shot
			- Fire a special projectile that injects dye that makes your targets ultra-visible
			- targets are 15% more likely to receive crits
			- Team gains %10 accuracy against marked targets for 2 rounds
			- Shot deals 2d7 damage on impact
### Demolitions Expert
	- Abilities:
		- Shelled out
			- Fire 2d2 shotgun shells at target dealing base weapon damage per shell
			- Target has -10% damage resistence for 3d2 rounds
		- Nade heaven
			- Toss a well-timed frag exploding on impact
				- deals 4d8 explosive damage
		- Smesh
			- Perform a single leg takedown
			- Once target on their back, foot stomp their head for 5d9 damage
			- Target gets up same turn
			- Target takes 10% more CQC damage for 2 rounds

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
		- Knee stomp
			- Oblique kick target opponent's knee backwards
				- if(roll('1d10') + strength > 5) { 
				   // opponent is stuck on ground for 3 turns
				  }
			  - If this is the second knee on the same target
					- opponent can only fight from their back
					- unless teammate shoots them up with HGH, Durinabol, or Vicodin
						- each time target takes damage
							- they are shifted backwards in the lineup
### OTR Specialist
	- Abilities:
		- Extortion
			- A random teammate will turn on target
				- Teammate deals their primary (first) ability against target
		- Introspect
			- Scan target
				- trigger device that detonates ammunition 
					- target has an empty cartridge and must reload before attacking again
		- Demoralize
			- Fire an adrenaline filled shot that causes target:
				- roll X, if success panic on next turn and skip this target's turn
				- roll X, if success cause severe stress dealing 3d6 damage for 2 rounds
### Infosec
	- Abilities:
		- Drone
			- parasitic drone
				- latches onto head and controls target for 1 round
		- Deafening logistics
			- bleeding eardrums
			- sonic assault
				- stun / disorient
					- disorient has chance of friendly fire on affected targets
		- Crop dust (medical defensive)
			- Drone covers team with reviving mist of inhalable HGH
		- Crop dust (offensive)
			- Drone drops a smoke screen in front of target 2 enemies

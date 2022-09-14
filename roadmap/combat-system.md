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

## Combat
1) roll 1d2 (with modifiers), decide which team goes first
	- if 1: PC team goes first
	- if 2: enemy team goes first
	- "modifiers" means any passive abilities from gear that
		- might affect initiative of team, or bias to allow team to go first
2) [winner of cointoss] performs round 1
### Combat round
	- Resolve status effects
	- Decrement/Increment positional penalties (i.e.: character forced on their back)
		- if reached 0, alter positions
	- Determine which character goes first
		- we would need an initiative attribute to determine this
	- Otherwise, just resolve from front of line to the back
		- for player 1, that would be the right most character towards the leftmost character
	- Perform skip check
		- if character was downed, or should be skipped due to status effects
			- skip this player's turn, but first:
			- perform all status increment/decrements for any statuses char is affected by
	- Character performs ability
		- Calculate accuracy of ability
			- negate this with the DODGE ability of target
		- If ability misses, go to char_end_phase
		- add/remove status effects on character if caused by ability
		- add/remove status effects on target if any
		- check for extra phase
			- most characters have one phase, but some have multiple steps
				in their ability. for example, see MCMAP Instructor's Clinch Warfare ability
	- Character uses weapon
		- If clip empty, reload
			- will be tricky to determine what else they can do this round
		- Calculate accuracy of weapon
			- Subtract accuracy if character is affected by ACC debuffs
			- Add accuracy if char affected by ACC buffs or status affects
		- Roll weapon.dice_count weapon.dice_sides
			- apply status buffs if any
			- apply status nerfs if any
		- Get weapon.range
			- depending on position of character, and target, damage/accuracy
				can suffer if target is well outside the weapon.range
		- Calculate damage
			- honor weapon.range debuff
		- Apply damage to target
			- honor target's buffs/nerfs
			- honor target's damage specific buffs/nerfs
			- determine penetration amount
			- calculate and apply status effects (i.e.: bleed, disorient)
		- Lucky son of a gun
			- Do a luck roll, if successful, get an extra attack. repeat Character uses Weapon phase
	- Target gets hit
		- Subtract HP from calculated damage
		- if target gets hit and is dealt enough damage to bring their HP down very low
			- they can either die depending on status effects that are pushing them over the edge
			- or they can be "downed" in which case a teammate must use their whole turn to revive them to 10% health
		- Perform any passive/defensive abilities that may affect
			- status effects
			- attributes
	- `char_end_phase`:
			- update position if changed
	- ``:


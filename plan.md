# Purpose of this document
- To document the way the node API will be utilized
- The goal of this project is to familiarize myself with the Node JS API. I also intend on using this project to rapidly prototype a turn based game.

# Filesystem API
- Importing assets
	- World
	- Rooms
	- NPC's
	- Weapons
	- Armor
	- Consumables

# Assertions API
- Sanity checks all over the codebase

# Path API
- Automating the loading of assets
	- i.e.: having a modules/plugins
		- dynamically load code

# Crypto API
- Using cryptographically secure values for:
	- Dice rolls
	- Loot drops
	- Saving throws
	- Random encounters

# DNS API
- Reverse IP lookup of clients

# Console API
- Abstract away debug/info/error output

# Child Process API
- Spawn child instances for different parts of a world

# Errors API
- Wrap and handle errors at all levels

# HTTP API
- Simple LAN-based communication between instances
	- Health check
	- Get load balancing data
	- Request/respond with users and statistics

# HTTPS API
- Communication with external API's
	- Slack
	- POST-ing use statistics to the publicly available REST API

# Internationalization API
- All strings that appear to a user must be wrapped in a globally available and easy to use wrapper function

# Net API
- Sockets
	- IPC communication between instances

# Process API
- Argv parsing
- Killing unresponsive child processes
- Getting uptime
- Changing the UID of the process to a less privileged one for security purposes


# Events API
- Player events
	- Level up
	- Won battle
	- Lost battle
- World events
	- A player enters the world
- Chat
	- Display message

# Readline API
- Create a CLI utility that can:
	- query a world or instance
	- run commands on a world or instance

# ZLIB API
- Compress:
	- logs
	- access logs
	- error logs

# Stream API
- Uploading and downloading to:
	- S3

# Timers API
- Lockout multiple failed logins

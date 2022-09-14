# Prototype
An open source Turn Based Tactics engine written in NodeJS

# Our Purpose
To allow other developers to use the concepts of this game engine to rapidly prototype ideas. The license chosen for this project is as permissive as possible. 

# Running the game
Please be sure to checkout the `usage` page by passing `-h` or `--help` or `/?` (for windows users).
``` sh
node main.js --help
```
or:
``` sh
node main.js -h
```
or (for Windows users):
``` powershell
node main.js /?
```
NOTE: `-h` and `--help` should theoretically work for Windows users.

# Options
## Using a custom config file
``` sh
node main.js --config-file=custom-env.json run
```
By default, we use `.env.json`. If you don't have a `.env.json` yet, you can copy `.env.json.example` and start from there.

## Running the game with default parameters
``` sh
node main.js run
```

## Importing a world
``` sh
node main.js --import-world=world.json
```
The `world.json` file should have the following format:
``` json
{
  "vnum": 1234,
  "title": "your title",
  "description": "your description"
}
```

## Creating the default world
``` sh
node main.js --create-world
```
or:
``` sh
node main.js -c
```

## Printing version of dependencies and program
``` sh
node main.js --version
```
or:
``` sh
node main.js -v
```


# License
See [LICENSE](LICENSE)

# Version
`1.0.3`

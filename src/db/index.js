const path = require('path');
const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const { proc } = require('../util/process/status.js');

class PersistentStorage {
	orm = null;
	constructor(storage = path.resolve(__dirname + '/../../data/world.db')){
        this.orm = new Sequelize({
              dialect: 'sqlite',
              storage,
        });
	}
    log(str){
        proc.log(`PersistentStorage says: "${str}"`);
    }
}


module.exports = {
    db: new PersistentStorage(),
    Sequelize,
    Model,
    DataTypes,
};

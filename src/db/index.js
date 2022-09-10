const path = require('path');
const Sequelize = require('sequelize');
const {  Model, DataTypes } = require('sequelize');

class PersistentStorage {
	orm = null;
	constructor(storage = path.resolve(__dirname + '/../../data/world.db')){
        this.orm = new Sequelize({
              dialect: 'sqlite',
              storage,
        });
	}
    log(str){
        console.log(`PersistentStorage says: "${str}"`);
    }
}


module.exports = {
    db: new PersistentStorage(),
    Sequelize,
    Model,
    DataTypes,
};


const Sequelize = require('sequelize');
class PersistentStorage {
	orm = null;
	constructor(){
		this.orm = new Sequelize('sqlite:memory:');
		console.log(`PersistentStorage constructor`);
	}
}

//// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:');
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
//
//// Option 2: Passing parameters separately (sqlite)
//const sequelize = new Sequelize({
//  dialect: 'sqlite',
//  storage: 'path/to/database.sqlite'
//});
//
//// Option 3: Passing parameters separately (other dialects)
//const sequelize = new Sequelize('database', 'username', 'password', {
//  host: 'localhost',
//  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//});

module.exports = new PersistentStorage();

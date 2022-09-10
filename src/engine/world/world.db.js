const { db, Sequelize, Model, DataTypes, } = require('../../db/');
class World extends Model { }
const WorldTableSchema = {
    vnum: DataTypes.NUMBER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
};
const sequelize = db.orm;

const W = {};
module.exports = W;

W.initialized = false;

W.__init_module = async () => {
    World.init(WorldTableSchema, { sequelize, modelName: 'world' });
    if(!W.initialized) {
        await sequelize.sync();
    }
    W.initialized = true;
};

W.create = async (...data) => {
    return await World.create(...data);
};

W.load_by_vnum = async (vnum) => {
    return await World.findAll({
        where: {
            vnum,
        },
    });
};

W.model = World;

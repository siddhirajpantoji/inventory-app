/**
 * This class will create and Test Sequelise connection 
 */
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        underscored: true,
        timestamps:true
    }
});
// Single Object for all 
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.category = require('../models/Category')(sequelize,Sequelize)
module.exports = db
const Sequelize = require('sequelize');
const db = require('../services/database.js');

const Task = db.define('tasks', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    User_id: Sequelize.INTEGER
}, 
    {
    freezeTableName: true,
    tableName: 'tasks'
    })
db.sync();
module.exports = Task;

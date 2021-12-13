const sequelize = require('../config/database.js')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    userId: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Users'
});

module.exports = User;
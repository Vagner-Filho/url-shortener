const sequelize = require('../config/database.js')
const { DataTypes } = require('sequelize')

const Url = sequelize.define('url', {
    userId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    shorterUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numberOfVisits: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    originalUrl: {
        type: DataTypes.STRING,
        primaryKey: true
    }
}, {
    tableName: 'Urls'
});

module.exports = Url;
import { sequelize } from '../config/database.js';

export const url = sequelize.define('url', {
    userId: {
        type: sequelize.STRING,
        allowNull: true
    },
    shortenUrl: {
        type: sequelize.STRING,
        allowNull: false,
    },
    numberOfVisits: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    originalUrl: {
        type: sequelize.STRING,
        primaryKey: true
    }
});
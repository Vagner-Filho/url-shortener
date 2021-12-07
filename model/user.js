import { sequelize } from '../config/database.js';

export const User = sequelize.define('user', {
    email: {
        type: sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    }
});
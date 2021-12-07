import Sequelize from 'sequelize'
export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

// module.exports = sequelize;
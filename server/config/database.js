import Sequelize from 'sequelize';
import 'dotenv/config.js'

export const db = new Sequelize('test', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

/*// Test the database connection
Sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;*/

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
   'sterling', //dbname (rescue)
   'sqladmin', //username
   'Password@12345',//password
    {
      host: 'msysq348.mysql.database.azure.com', //host: fill ip here
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

export default sequelize
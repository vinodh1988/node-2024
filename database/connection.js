// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
export const connection = await mysql.createConnection({
  host: 'msysq348.mysql.database.azure.com',
  user: 'sqladmin',
  database: 'sterling',
  password: 'Password@12345'
});

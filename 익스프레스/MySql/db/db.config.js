const mysql = require('mysql2/promise');
const {dbConfig} = require('../config/db.config');

const connectionPool = mysql.createPool({
  host:dbConfig.host,
  user:dbConfig.user,
  password:dbConfig.password,
  database:dbConfig.database,
  waitForConnections:true,
  connectionLimit:10,
});

module.exports = {
  connectionPool: connectionPool
}
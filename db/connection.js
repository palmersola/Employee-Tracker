const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  database: "employee_tracker",
  user: "root",
  password: "Royals&19",
  multipleStatements: true
});

module.exports = connection;

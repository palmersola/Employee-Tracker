const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  database: "employee_tracker",
  user: "root",
  password: "pass",
  multipleStatements: true
});

module.exports = connection;

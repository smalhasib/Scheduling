const mysql = require("mysql");

//Database connection....
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shanto78@",
  database: "Schedule",
});
database.connect((err) => {
  if (err) return console.log(err);
  else {
    console.log("MySql connected successfully.");
  }
});
const project =
  "CREATE TABLE if not exists project (PID VARCHAR(255) PRIMARY KEY,name VARCHAR(255), summary VARCHAR(255), status VARCHAR(255))";
database.query(project, function (err, result) {
  if (err) return console.log(err);
});
const wage =
  "CREATE TABLE if not exists wage (WID VARCHAR(255) PRIMARY KEY,salary INT, bonus INT)";
database.query(wage, function (err, result) {
  if (err) return console.log(err);
});

module.exports = database;

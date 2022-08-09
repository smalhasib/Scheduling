const mysql = require("mysql");

//Database connection....
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jinxed718",
  database: "Schedule",
});
database.connect((err) => {
  if (err) return console.log(err);
  else {
    console.log("MySql connected successfully.");
  }
});
const project =
  "CREATE TABLE if not exists project (PID VARCHAR(255) PRIMARY KEY, MID VARCHAR(255),name VARCHAR(255), summary VARCHAR(255), status VARCHAR(255))";
database.query(project, function (err, result) {
  if (err) return console.log(err);
});
const wage =
  "CREATE TABLE if not exists wage (WID VARCHAR(255) PRIMARY KEY,salary INT, bonus INT)";
database.query(wage, function (err, result) {
  if (err) return console.log(err);
});
const admin =
  "CREATE TABLE if not exists admin (AID VARCHAR(255) PRIMARY KEY,name VARCHAR(255), avatar VARCHAR(255),email VARCHAR(255), password VARCHAR(255), phone VARCHAR(255), address VARCHAR(255) )";
database.query(admin, function (err, result) {
  if (err) return console.log(err);
});
const employee =
  "CREATE TABLE if not exists employee (EID VARCHAR(255) PRIMARY KEY,name VARCHAR(255), avatar VARCHAR(255) ,age VARCHAR(255), NID VARCHAR(255), address VARCHAR(255), phone VARCHAR(255), email VARCHAR(255), password VARCHAR(255) )";
database.query(employee, function (err, result) {
  if (err) return console.log(err);
});
const team =
  "CREATE TABLE if not exists team (MID VARCHAR(255),WID VARCHAR(255))";
database.query(team, function (err, result) {
  if (err) return console.log(err);
});

module.exports = database;

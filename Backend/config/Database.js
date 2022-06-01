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
const sql =
  "CREATE TABLE if not exists project (PID int AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), summary VARCHAR(255), status VARCHAR(255))";
database.query(sql, function (err, result) {
  if (err) return console.log(err);
  // else {
  //   console.log("Table created");
  // }
});

module.exports = database;

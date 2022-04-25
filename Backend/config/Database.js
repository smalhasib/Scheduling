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

module.exports = database;

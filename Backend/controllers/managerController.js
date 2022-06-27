const database = require("../config/Database");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// adding new employee in employee table.....
const AddManagers = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please fill recommended fields." });
    }
    if (email.match(/manager/g)[0] === "manager") {
      const hashPassword = await bcrypt.hash(password, 12);
      const newEmployee = `INSERT INTO employee (EID, name, email, password) VALUES('${uuidv4()
        .toString()
        .replace("-", "")
        .substring(0, 8)}','${name}', '${email}', '${hashPassword}')`;
      await database.query(newEmployee, (err, result) => {
        if (err) {
          return res.status(400).json({ error: "Employee note edded." });
        } else {
          return res
            .status(200)
            .json({ message: "Employee added successfully." });
        }
      });
    }
  } catch (error) {
    res.status(400).json({ error: "Something wrong." });
  }
};

// Get all the employee from DB...
const GetAllManagers = (req, res) => {
  try {
    const manager = `SELECT * FROM employee WHERE email REGEXP  'manager'`;
    database.query(manager, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something is wrong.");
  }
};
const GetSingleEmployee = (req, res) => {};
const DeleteEmployee = (req, res) => {};
const UpdateEmployee = (req, res) => {};

module.exports = {
  AddManagers,
  GetAllManagers,
  GetSingleEmployee,
  DeleteEmployee,
  UpdateEmployee,
};

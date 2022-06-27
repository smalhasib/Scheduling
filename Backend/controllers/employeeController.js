const database = require("../config/Database");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// adding new employee in employee table.....
const SignupEmployee = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please fill recommended fields." });
    }
    const managerOrWorkeOrNot =
      email.match(/manager/g) || email.match(/worker/g);
    console.log(managerOrWorkeOrNot);
    if (managerOrWorkeOrNot !== "manager" || managerOrWorkeOrNot !== "worker") {
      return res.status(400).json({ error: "Invalid credentials." });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newEmployee = `INSERT INTO employee (EID, name, email, password) VALUES('${uuidv4()
      .toString()
      .replace("-", "")
      .substring(0, 8)}','${name}', '${email}', '${hashPassword}')`;
    await database.query(newEmployee, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({ message: "Employee added successfully." });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something wrong." });
  }
};

// Get all the employee from DB...
const GetAllEmployee = (req, res) => {
  try {
    const employee = "SELECT * FROM employee";
    database.query(employee, (err, result) => {
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
  SignupEmployee,
  GetAllEmployee,
  GetSingleEmployee,
  DeleteEmployee,
  UpdateEmployee,
};

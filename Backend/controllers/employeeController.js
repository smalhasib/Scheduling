const database = require("../config/Database");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// adding new employee in employee table.....
const AddManagers = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please fill recommended fields." });
    }
    const notAdmin = email.match(/admin/g);
    if (!notAdmin) {
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
    } else {
      res.status(400).json({ error: "Invalid Credentials." });
    }
  } catch (error) {
    res.status(400).json({ error: "Something wrong." });
  }
};

// Get all the manager from DB...
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

// Get all the workers from DB...
const GetAllWorkers = (req, res) => {
  try {
    const worker = `SELECT * FROM employee WHERE email REGEXP  'worker'`;
    database.query(worker, (err, result) => {
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

// Getting single employee from db..
const GetSingleEmployee = async(req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const singlemployee = `SELECT * FROM employee WHERE EID = '${id}'`;
    await database.query(singlemployee, (err, result) => {
      if (err) {
        res.status(400).json({ error: err });
      } else {
        const data = result[0]
        res.status(200).json({ data });
      }
    });
  } catch (error) {
    return res.status(400).json({ error: "Something wrong." });
  }
};

//Delete employee fron db....
const DeleteEmployee = (req, res) => {
  const { id } = req.params;
  try {
    const deleteEmployee = `DELETE FROM employee WHERE EID = "${id}"`;
    database.query(deleteEmployee, (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.status(200).json({ message: "Employee delete successfully." });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something wrong." });
  }
};
const UpdateEmployee = (req, res) => {};

module.exports = {
  AddManagers,
  GetAllManagers,
  GetAllWorkers,
  GetSingleEmployee,
  DeleteEmployee,
};

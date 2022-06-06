const database = require("../config/Database");
const mysql = require("mysql");
const { v4: uuidv4 } = require("uuid");

const CreateWage = async (req, res) => {
  console.log(req.body);
  const { salary, bonus } = req.body;
  try {
    if (!salary || !bonus) {
      return res.status(400).json("Please fill all fields.");
    }
    const sql = `INSERT INTO wage (WID, salary, bonus) VALUES('${uuidv4()
      .toString()
      .replace("-", "")
      .substring(0, 8)}','${salary}', '${bonus}')`;
    database.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({ message: "Wage added successfully." });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json("Invalid data.");
  }
};
const GetWage = async (req, res) => {
  try {
    const sql = "SELECT * FROM wage";
    database.query(sql, (err, result) => {
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
const DeleteWage = async (req, res) => {
    const wid = req.params.id;
    try {
      const sql = `DELETE FROM wage WHERE WID = ${wid}`;
      database.query(sql, (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          res.status(200).json("Deleted successfully.");
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json("Something wrong.");
    }
};
const EditWage = async (req, res) => {
    const { salary, bonus } = req.body;
    const wid = req.params.id;
    try {
      const sql = `UPDATE wage SET salary ='${salary}', bonus ='${bonus}' WHERE WID = ${wid}`;
      database.query(sql, (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          res.status(200).json("Update successful.");
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json("Something wrong.");
    }
};

module.exports = { CreateWage, GetWage, DeleteWage, EditWage };

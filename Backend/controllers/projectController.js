const database = require("../config/Database");
const mysql = require("mysql");

// add projects....
const CreateProject = async (req, res) => {
  const { name, summary, status } = req.body;
  try {
    if (!name || !summary || !status) {
      return res.status(400).json("Please fill all fields.");
    }
    const sql = `INSERT INTO project (name, summary, status) VALUES('${name}', '${summary}', '${status}')`;
    database.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({ message: "Project added successfully." });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json("Invalid data.");
  }
};

// Get all projects.....
const GetProject = async (req, res) => {
  try {
    const sql = "SELECT * FROM project";
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

// delete project....
const DeleteProject = async (req, res) => {
  const pid = req.params.id;
  try {
    const sql = `DELETE FROM project WHERE PID = ${pid}`;
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

// edit porject....
const EditProject = async (req, res) => {
  const { name, summary, status } = req.body;
  const pid = req.params.id;
  try {
    const sql = `UPDATE project SET name ='${name}', summary ='${summary}', status ='${status}' WHERE PID = ${pid}`;
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
module.exports = { CreateProject, GetProject, DeleteProject, EditProject };

const database = require("../config/Database");

// Get all works.....
const GetAllWork = async (req, res) => {
    try {
      const sql =   "SELECT DISTINCT team.MID, project.PID, project.name, project.status, project.summary FROM team inner JOIN project ON team.mid = project.mid;";
     
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

module.exports = GetAllWork;
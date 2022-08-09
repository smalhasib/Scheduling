const database = require("../config/Database");

// Get all works.....
const GetAllWork = async (req, res) => {
    try {
      const sql = "SELECT * FROM team INNER JOIN project ON team.mid = project.mid";
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
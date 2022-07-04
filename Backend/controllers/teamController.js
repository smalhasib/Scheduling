const database = require("../config/Database");

const CreateTeam = async (req, res) => {
  const { managerId, workerId } = req.body;
  try {
    if (!managerId || !workerId) {
      return res.status(400).json({ error: "Provide manager and worker ids." });
    }
    const existID = `SELECT * FROM team WHERE WID = '${workerId}'`;
    await database.query(existID, async (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        if (result.length > 0) {
          return res
            .status(400)
            .json({ message: "Worker already in the team." });
        } else {
          const sql = `INSERT INTO team (MID, WID) VALUES('${managerId}', '${workerId}')`;
          await database.query(sql, (err, result) => {
            if (err) {
              return console.log(err);
            } else {
              res.status(200).json({ message: "Team created successfully." });
            }
          });
        }
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Something wrong." });
  }
};
const GetTeams = async (req, res) => {
  try {
    const sql = `SELECT * FROM team `;
    await database.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Something wrong." });
  }
};

module.exports = { CreateTeam, GetTeams };

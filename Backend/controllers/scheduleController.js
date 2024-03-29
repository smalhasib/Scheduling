const database = require("../config/Database");
const mysql = require("mysql");
const { v4: uuidv4 } = require("uuid");

// add schedule....
const CreateSchedule = async (req, res) => {
  console.log(req.body);

  const { shift, time, managerID, date } = req.body;
  try {
    if (!shift || !date || !managerID || !time) {
      return res.status(400).json("Please fill all fields.");
    }
    const sql = `INSERT INTO schedules (SCID, SID, Shift_time, MID, date) VALUES('${uuidv4()
      .toString()
      .replace("-", "")
      .substring(0, 8)}', '${shift}', '${time}', '${managerID}', '${date}')`;
    await database.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({ message: "Schedule added successfully." });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json("Invalid data.");
  }
};

// Get all schedules.....
const GetSchedule = async (req, res) => {
  try {
    const sql = "SELECT * FROM schedules";
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

// delete schedule....
const DeleteSchedule = async (req, res) => {
  const sid = req.params.id;
  console.log(sid);
  try {
    const sql = `DELETE FROM schedules WHERE SCID = '${sid}'`;
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

// edit schedule....
const EditSchedule = async (req, res) => {
  console.log(req.body);
  const { shift, date, status, managerID } = req.body;
  const sid = req.params.id;
  try {
    const sql = `UPDATE schedule SET shift ='${shift}', date ='${date}', status ='${status}', managerID='${managerID}' WHERE SID = ${sid}`;
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

const GetWorkerSchedule = async (req, res) => {
  try {
    const sql =
      "SELECT * FROM schedules INNER JOIN team ON schedules.MID = team.MID INNER JOIN employee ON team.WID = employee.EID";
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
const GetManagerSchedule = async (req, res) => {
   try {
     const sql =
       "SELECT * FROM schedules INNER JOIN team ON schedules.MID = team.MID INNER JOIN employee ON team.MID = employee.EID";
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
module.exports = {
  CreateSchedule,
  GetSchedule,
  DeleteSchedule,
  EditSchedule,
  GetWorkerSchedule,
  GetManagerSchedule,
};

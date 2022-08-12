const database = require("../config/Database");
const mysql = require("mysql");
const { v4: uuidv4 } = require("uuid");

const CreateShift = async(req, res)=>{
    console.log(req.body);
    const {shiftName, shiftTime} = req.body;
   try {
     if (!shiftName || !shiftTime) {
       return res.status(400).json({ error: "Please fill all the fields." });
     }
      const sql = `INSERT INTO shift (SID, Shift_name, Shift_time) VALUES('${uuidv4()
        .toString()
        .replace("-", "")
        .substring(
          0,
          8
        )}', '${shiftName}', '${shiftTime}')`;
      await database.query(sql, (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          res.status(200).json({ message: "Shift added successfully." });
        }
      });
   } catch (error) {
    console.log(error)
    res.status(400).json({error})
   }

}

const GetShift = async(req, res)=>{
     try {
       const sql = "SELECT * FROM shift";
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

}
module.exports = {CreateShift, GetShift}
const database = require("../config/Database");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

// Creating admin storing in admin table.......
const CreateAdmin = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  try {
    console.log(email, password);
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please provide all info." });
    }
    const adminOrNot = email.match(/admin/g)[0];
    console.log(adminOrNot);
    if (adminOrNot !== "admin") {
      return res.status(400).json({ error: "Email format is wrong." });
    }
    const existEmail = `SELECT * FROM admin WHERE email ='${email}'`;
    await database.query(existEmail, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        if (result.length > 0) {
          return res.status(400).json({ error: "Admin already exist." });
        }
      }
    });
    const hashPassword = await bcrypt.hash(password, 12);
    const sql = `INSERT INTO admin (AID,name,email, password) VALUES('${uuidv4()
      .toString()
      .replace("-", "")
      .substring(0, 8)}','${name}', '${email}', '${hashPassword}')`;
    await database.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({ message: "Admin added successfully." });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something wrong." });
  }
};

// only admin login here.....
const LoginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fil all info" });
    }

    // from email checking admin or not using regex....
    const adminOrNot =
      email.match(/admin/g) ||
      email.match(/manager/g) ||
      email.match(/worker/g);
    const role = adminOrNot[0];
    if (role === "admin") {
      const user = `SELECT * FROM admin WHERE email = '${email}'`;
      await database.query(user, async (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          console.log(result);
          if (result.length === 0) {
            return res.json({ message: "User didn't find." });
          }
          const { AID } = result[0];
          const matchPassword = await bcrypt.compare(
            password,
            result[0].password
          );
          console.log(matchPassword);
          if (matchPassword) {
            const token = jwt.sign({ userId: AID }, process.env.JWT_SECRET, {
              expiresIn: "7d",
            });
            res.status(200).json({ token, AID, role });
          } else {
            return res.status(400).json({ error: "Invalid credentials" });
          }
        }
      });
    } else {
      const user = `SELECT * FROM employee WHERE email = '${email}'`;
      await database.query(user, async (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          if (result.length === 0) {
            return res.json({ message: "Employee didn't find." });
          }
          console.log(result);
          const { EID } = result[0];
          console.log(password);
          console.log(result[0].password);
          const matchPassword = bcrypt.compare(password, result[0].password);
          console.log(matchPassword);
          if (matchPassword) {
            const token = jwt.sign({ userId: EID }, process.env.JWT_SECRET, {
              expiresIn: "7d",
            });
            res.status(200).json({ token, EID, role });
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Somethig is wrong.." });
  }
};
module.exports = { CreateAdmin, LoginAdmin };

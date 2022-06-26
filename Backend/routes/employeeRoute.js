const express = require("express");
const router = express.Router();
const {
  SignupEmployee,
  GetAllEmployee,
  GetSingleEmployee,
  DeleteEmployee,
  UpdateEmployee,
} = require("../controllers/employeeController");
router.post("/signup", SignupEmployee);
router.get("/allemployee", GetAllEmployee);
router.get("/singlemployee/:id", GetSingleEmployee);
router.delete("/deletemployee/:id", DeleteEmployee);
router.put("/updatemployee/:id", UpdateEmployee);
module.exports = router;

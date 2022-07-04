const express = require("express");
const router = express.Router();
const {
  AddManagers,
  GetAllManagers,
  GetAllWorkers,
  DeleteEmployee,
} = require("../controllers/employeeController");

// Employee routes..
router.post("/addemployee", AddManagers);
router.get("/allmanagers", GetAllManagers);
router.get("/allworkers", GetAllWorkers);
router.delete("/delemployee/:id", DeleteEmployee);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  AddManagers,
  GetAllManagers,
  GetSingleEmployee,
  DeleteEmployee,
  UpdateEmployee,
} = require("../controllers/managerController");
const { AddWorker, GetAllWorkers } = require("../controllers/workerController");

// managers route..
router.post("/addmanager", AddManagers);
router.get("/allmanager", GetAllManagers);
// worker route...
router.post("/addworker", AddWorker);
router.get("/allworker", GetAllWorkers);
router.get("/singlemployee/:id", GetSingleEmployee);
router.delete("/deletemployee/:id", DeleteEmployee);
router.put("/updatemployee/:id", UpdateEmployee);
module.exports = router;

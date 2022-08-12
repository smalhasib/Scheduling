const express = require("express");
const router = express.Router();
const {
  CreateSchedule,
  GetSchedule,
  DeleteSchedule,
  EditSchedule,
  GetWorkerSchedule,
  GetManagerSchedule,
} = require("../controllers/scheduleController");

router.post("/createschedule", CreateSchedule);
router.get("/getschedule", GetSchedule);
router.get("/employeeschedule", GetWorkerSchedule);
router.get("/managerschedule", GetManagerSchedule);
router.delete("/deleteschedule/:id", DeleteSchedule);
router.put("/editschedule/:id", EditSchedule);

module.exports = router;
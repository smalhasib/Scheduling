const express = require("express");
const router = express.Router();
const {
  CreateSchedule,
  GetSchedule,
  DeleteSchedule,
  EditSchedule,
} = require("../controllers/scheduleController");

router.post("/createschedule", CreateSchedule);
router.get("/getschedule", GetSchedule);
router.delete("/deleteschedule/:id", DeleteSchedule);
router.put("/editschedule/:id", EditSchedule);

module.exports = router;
const express = require("express");
const router = express.Router();
const {
  CreateWage,
  GetWage,
  DeleteWage,
  EditWage,
} = require("../controllers/wageController");

router.post("/createwage", CreateWage);
router.get("/getwage", GetWage);
router.delete("/deletewage/:id", DeleteWage);
router.put("/editwage/:id", EditWage);
module.exports = router;

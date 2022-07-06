const express = require("express");
const router = express.Router();
const {
  CreateAdmin,
  LoginAdmin,
  GetAdmin,
} = require("../controllers/addminController");
router.post("/createadmin", CreateAdmin);
router.post("/loginuser", LoginAdmin);
router.get("/getadmin/:id", GetAdmin)

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  CreateAdmin,
  LoginAdmin,
  GetAdmin,
  UpdateAdmin,
} = require("../controllers/addminController");
router.post("/createadmin", CreateAdmin);
router.post("/loginuser", LoginAdmin);
router.get("/getadmin/:id", GetAdmin)
router.put("/updateadmin/:id", UpdateAdmin);

module.exports = router;

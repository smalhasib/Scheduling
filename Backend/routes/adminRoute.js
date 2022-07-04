const express = require("express");
const router = express.Router();
const { CreateAdmin, LoginAdmin } = require("../controllers/addminController");
router.post("/createadmin", CreateAdmin);
router.post("/loginuser", LoginAdmin);

module.exports = router;

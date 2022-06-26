const express = require("express");
const router = express.Router();
const { CreateAdmin, LoginAdmin } = require("../controllers/addminController");
router.post("/createadmin", CreateAdmin);
router.post("/loginadmin", LoginAdmin);

module.exports = router;

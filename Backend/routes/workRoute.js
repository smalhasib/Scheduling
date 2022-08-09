const express = require("express");
const router = express.Router();
const GetAllWork = require("../controllers/workController");

router.get("/getwork", GetAllWork);
module.exports = router;

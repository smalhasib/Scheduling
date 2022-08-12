const router = require("express").Router();
const {CreateShift, GetShift} = require("../controllers/shiftController")
router.post("/addshift", CreateShift);
router.get("/getshift", GetShift)

module.exports = router;
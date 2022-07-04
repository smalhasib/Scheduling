const express = require("express");
const router = express.Router();

const { CreateTeam, GetTeams } = require("../controllers/teamController");

router.post("/createteam", CreateTeam);
router.get("/geteam", GetTeams);
module.exports = router;

const express = require("express");
const router = express.Router();
const {
  CreateProject,
  GetProject,
  DeleteProject,
  EditProject,
} = require("../controllers/projectController");

router.post("/createproject", CreateProject);
router.get("/getproject", GetProject);
router.delete("/deleteproject/:id", DeleteProject);
router.put("/editproject/:id", EditProject);
module.exports = router;

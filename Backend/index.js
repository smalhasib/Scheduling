const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const database = require("./config/Database");
const projectRoute = require("./routes/projectRoute");
const adminRoute = require("./routes/adminRoute");
const employeeRoute = require("./routes/employeeRoute");
const teamRoute = require("./routes/teamRoute")
const workRoute = require("./routes/workRoute")
const scheduleRoute = require("./routes/scheduleRoute")
const shiftRoute = require("./routes/shiftRoute")

dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/project", projectRoute);
app.use("/admin", adminRoute);
app.use("/employee", employeeRoute);
app.use("/team", teamRoute)
app.use("/work", workRoute)
app.use("/schedule", scheduleRoute)
app.use("/shift",shiftRoute)

app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening at port http://localhost:${process.env.PORT}`
  );
});

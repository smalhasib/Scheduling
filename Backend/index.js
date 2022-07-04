const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const database = require("./config/Database");
const projectRoute = require("./routes/projectRoute");
const wageRoute = require("./routes/wageRoute");
const adminRoute = require("./routes/adminRoute");
const employeeRoute = require("./routes/employeeRoute");
const teamRoute = require("./routes/teamRoute")

dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/project", projectRoute);
app.use("/wage", wageRoute);
app.use("/admin", adminRoute);
app.use("/employee", employeeRoute);
app.use("/team", teamRoute)

app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening at port http://localhost:${process.env.PORT}`
  );
});

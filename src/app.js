const express = require("express");
const app = express();
require("../src/db/connection");
const Authrouter = require("../src/routes/authRoute");
const Jobrouter = require("../src/routes/JobsRoute");
const Applicantrouter = require("../src/routes/ApplicationRoute");
const errorMiddlewar = require("./middleware/errormiddleware");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
app.use("/api/user", Authrouter);
app.use("api/", Jobrouter);
app.use("api/User", Applicantrouter);
app.use(errorMiddlewar);

app.listen(port, () => {
  console.log(`running on port${port}`);
});

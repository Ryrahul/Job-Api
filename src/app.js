const express = require("express");
const app = express();
require("../src/db/connection");
const router = require("../src/routes/router");
const errorMiddlewar = require("./middleware/errormiddleware");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;
app.use("/api", router);
app.use(errorMiddlewar);

app.listen(port, () => {
  console.log(`running on port${port}`);
});

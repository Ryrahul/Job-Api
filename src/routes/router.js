const express = require("express");
const { Register, login } = require("../controller/auth");
const { postJob, viewJob, vieweachJob,deleteJob, updateJob } = require("../controller/job");
const auth = require("../middleware/authorization");
const {
  postApplication,
  getApplications,
  getApplication,
  deleteApplications
} = require("../controller/applicant");
const router = express.Router();

// router.get("/jobs", (req, res) => {
//   res.send("this are all the jobs");
// });
router.post("/register", Register);
router.post("/login", login);
router.post("/addjob", auth, postJob);
router.get("/jobs", auth, viewJob);
router.get("/jobs/:id", auth, vieweachJob);
router.delete("/jobs/:id",auth,deleteJob)
router.post("/apply", auth, postApplication);
router.get("/applicants", auth, getApplications);
router.get("/candidate/:id", auth, getApplication);
router.delete("/delete/:id",auth,deleteApplications)
router.put("/update/:id",auth,updateJob)

module.exports = router;

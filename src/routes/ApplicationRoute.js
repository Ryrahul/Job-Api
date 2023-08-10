const express = require("express");
const router = express.Router();

const {
  postApplication,
  getApplications,
  getApplication,
  deleteApplications,
} = require("../controller/applicant");
const auth = require("../middleware/authorization");

router.post("/apply", auth, postApplication);
router.get("/applicants", auth, getApplications);
router.get("/candidate/:id", auth, getApplication);
router.delete("/delete/:id", auth, deleteApplications);
module.exports = router;

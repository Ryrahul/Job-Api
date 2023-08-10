const express = require("express");
const {
  postJob,
  viewJob,
  vieweachJob,
  deleteJob,
  updateJob,
} = require("../controller/job");
const auth = require("../middleware/authorization");

const router = express.Router();

router.post("/addjob", auth, postJob);
router.get("/jobs", auth, viewJob);
router.get("/jobs/:id", auth, vieweachJob);
router.delete("/jobs/:id", auth, deleteJob);
router.put("/update/:id", auth, updateJob);

module.exports = router;

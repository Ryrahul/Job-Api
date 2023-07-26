const mongoose = require("mongoose");
const applicantSchema = new mongoose.Schema({
  Job_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  User_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "accepted"],
    default: "pending",
  },
  Applicant_name: {
    type: String,
    required: true,
  },
});
const applicant = new mongoose.model("applicant", applicantSchema);
module.exports = applicant;

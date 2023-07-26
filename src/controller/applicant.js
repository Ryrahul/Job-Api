const applicant = require("../db/applicant");
//find by job id
const postApplication = async (req, res) => {
  try {
    const { job_id, Applicant_name } = req.body;
    UserId = req.user._id;
    console.log(UserId);
    const newApplicant = new applicant({
      Job_id: job_id,
      Applicant_name: Applicant_name,
      User_id: UserId,
    });
    await newApplicant.save();
    res.status(200).json(newApplicant);
  } catch (e) {
    res.send(e.message);
  }
};
const getApplications = async (req, res) => {
  //job ko id le khojne
  try {
    if (req.query.id) {
      const applicants = await applicant.find({ Job_id: req.query.id });
      res.send(applicants);
    } else {
      res.json({ message: "No such user" });
    }
  } catch (e) {
    res.json(e.message);
  }
};
const getApplication = async (req, res) => {
  try {
    const {id} = req.params;
    const candidate = await applicant.find({ _id: id });
    res.send(candidate);
  } catch (e) {
    res.json(e.message);
  }
};
const deleteApplications = async (req, res) => {
  try {
    const {id} = req.params.id;
    const candidate = await applicant.findById(id);

    if (!candidate) {
      return res.json({ message: "No such application" });
    }
    if (candidate.User_id.toString() !== req.user._id) {
      res.status(401).json({ message: "Not enough permission" });
    } else {
      await applicant.findByIdAndDelete(_id);
      res.json({ message: "Deleted Succesfully" });
    }
  } catch (e) {
    res.send(e.message);
  }
};
module.exports = {
  postApplication,
  getApplications,
  getApplication,
  deleteApplications,
};

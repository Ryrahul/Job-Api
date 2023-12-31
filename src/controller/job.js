const job = require("../db/Job");

const postJob = async (req, res) => {
  try {
    const { title, company, description, requirements, location, salary } =
      req.body;
    createdby = req.user._id;

    const newJob = new job({
      title: title,
      company: company,
      description: description,
      requirements: [requirements],
      location: location,
      salary: salary,
      postedBy: createdby,
    });
    await newJob.save();
    res.status(200).send(newJob);
  } catch (e) {
    res.send(e.message);
  }
};

const viewJob = async (req, res) => {
  try {
    const allJobs = await job.find();
    res.send(allJobs);
  } catch (e) {
    res.json(e.message);
  }
};

const vieweachJob = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const eachJobs = await job.findById(id);
    res.send(eachJobs);
  } catch (e) {
    res.json(e.message);
  }
};

const deleteJob = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const work = await job.findById(id);
  if (!work) {
    return res.status(401).send("No such Jobs");
  }
  if (work.postedBy.toString() !== req.user._id) {
    return res.status(401).json({ message: "Not enough permission" });
  } else {
    await job.findByIdAndDelete(id);
    res.json({ message: "deleted successfully" });
  }
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  const newUpdate = req.body;
  const availableJob = await job.findById(id);
  console.log(availableJob.postedBy.toString());
  console.log(req.user._id);

  if (!availableJob) {
    return res.status(401).json({ message: "No such jobs" });
  }
  if (availableJob.postedBy.toString() !== req.user._id) {
    res.status(401).json({ message: "no such permission " });
  } else {
    await job.findByIdAndUpdate(id, newUpdate);
    res.json("Editied Successfully");
  }
};

module.exports = {
  postJob,
  viewJob,
  vieweachJob,
  deleteJob,
  updateJob,
};

require("dotenv").config();

const User = require("../db/User");
const createtoken = require("../middleware/jwt");

const Register = async (req, res, next) => {
  try {
    const {email} = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
      return res.json({ message: "user already exists" });
    }
    const newEntry = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await newEntry.save();
    token = createtoken({ _id: newEntry._id, name: req.body.name });
    res.status(200).send(token);
  } catch (e) {
    next(e);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const person = await User.comparePassword(email, password);
    token = token = createtoken({ _id: person._id, name: person.name });

    res.json({
      message: "succes",
      token: token,
    });
  } catch (e) {
    res.json(e.message);
  }
};

module.exports = {
  Register,
  login,
};

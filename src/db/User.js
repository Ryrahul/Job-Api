const mongoose = require("mongoose");
const validator = require("email-validator");
const bcrypt = require("bcryptjs");
const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter you name"],
  },
  email: {
    type: String,
    required: [true, "Enter you email"],
    validate(value) {
      if (!validator.validate(value)) {
        throw new Error("Enter valid email");
      }
    },
  },
  password: {
    type: String,
    required: [true, "Enter you password"],
  },
});
jobSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
jobSchema.statics.comparePassword = async function (email, password) {
  const person = await User.findOne({ email });
  if (!person) {
    throw Error("incorrect email")
  }
  const isMatch = await bcrypt.compare(password, person.password);
  if (isMatch) {
    return person;
  }
  throw Error("incorrect password")
};

const User = new mongoose.model("Users", jobSchema);
module.exports = User;

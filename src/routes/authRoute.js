const express = require("express");
const router = express.Router();
const { Register, login } = require("../controller/auth");

router.post("/register", Register);
router.post("/login", login);
module.exports = router;


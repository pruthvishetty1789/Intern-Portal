const express = require("express");
const router = express.Router();

const { loginUser } = require("../controllers/userController"); // ✅ Make sure this path is correct

router.post("/login", loginUser); // ✅ POST not GET for login

module.exports = router;

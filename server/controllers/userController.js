const users = require("../data/users");

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    const { name, referralCode, donations } = user;
    res.json({ name, referralCode, donations });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

module.exports = { loginUser };

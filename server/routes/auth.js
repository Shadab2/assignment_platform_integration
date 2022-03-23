const router = require("express").Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");

//Register a new User
router.post("/register", async (req, res) => {
  try {
    // hash password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create a new user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save a new user
    await newUser.save();
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).send("No user found");
      return;
    }
    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validatePassword && res.status(404).send("Wrong Password");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;

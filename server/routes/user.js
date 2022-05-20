const router = require("express").Router();
let User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const userName = req.body.userName;

  const newUser = new User({ userName });

  newUser
    .save()
    .then(() => res.json(`${userName} User Added!`))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

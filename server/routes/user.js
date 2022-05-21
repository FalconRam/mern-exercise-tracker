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

router.put("/update/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id).then((user) => {
    user.userName = req.body.userName;

    user
      .save()
      .then((userName) => res.json(`${userName.userName} updated Successfully`))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;

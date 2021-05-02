const router = require("express").Router();
const { User } = require("../../models");

//GET all API USERS
router.get("/", (req, res) => {
  User.findAll({
      attributes: {exclude: ['password']}
  })
    .then((dbUser) => res.json(dbUser))
    .catch((err) => {
      console.log(err), res.status(500).json(err);
    });
});

//GET one API user
router.get("/:id", (req, res) => {
  User.findOne({
       attributes: {exclude: ['password']},
    where: {
      id: res.params.id,
    },
  })
    .then((dbUser) => {
      if (!dbUser) {
        res.status(404).json({ message: "No User found with that ID" });
        return;
      }
      res.json(dbUser);
    })
    .catch((err) => {
      console.log(err), res.status(500).json(err);
    });
});
//POST to user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    passwprd: req.body.password,
  })
    .then((dbUser) => res.json(dbUser))
    .catch((err) => {
      console.log(err), res.status(500).json(err);
    });
});

//Update/ PUT a specific user

router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: id.params.id,
    },
  })
    .then((dbUser) => {
      if (!dbUser[0]) {
        res.status(404).json({ message: "No User found with that ID" });
        return;
      }
      res.json(dbUser);
    })
    .catch((err) => {
      console.log(err), res.status(500).json(err);
    });
});

//DESTROY a specific User

router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUser) => {
      if (!dbUser[0]) {
        res.status(404).json({ message: "No User found with that ID" });
        return;
      }
      res.json(dbUser);
    })
    .catch((err) => {
      console.log(err), res.status(500).json(err);
    });
});

module.exports = router;

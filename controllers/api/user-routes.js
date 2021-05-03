const router = require("express").Router();
const { User, Post, Comments } = require('../../models');

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
    include: [{
      model:Post,
      attributes: ['id', 'title', 'post_url', 'created_at']
    },
    {
      model:Comments,
      attributes: [ 'id', 'comment_text', 'created_at'],
      include: {
        model: Post,
        attributes: ['title']
      }
    }
  
  ]
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
    password: req.body.password,
  })
    .then((dbUser) => res.json(dbUser))
    .catch((err) => {
      console.log(err)
     res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  User.findOne ({
    where: {
      email: req.body.email
    }
  }).then(dbUser => {
    if (!dbUser) {
      res.status(400).json({ message: 'Your email address does not match a current user' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    res.json({ user: dbUser, message: 'You are now logged in!' });
  });
});

//Update/ PUT a specific user

router.put("/:id", (req, res) => {
  User.update(req.body,{
    individualHooks: true,
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

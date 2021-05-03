const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
 Post.findAll({


    attributes: ["id", "post_url", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
   ],
  })
    .then((dbPost) => {
      console.log(dbPost[0]);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", {layout: dashboard, posts });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('login');
    });
});


// router.get("/", (req, res) => {
//   res.render("dashboard")
// });

module.exports= router
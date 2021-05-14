const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    content:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdf",
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    content:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdf",
  },

  {
    title: "Donec posuere metus vitae ipsum.",
    content:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdf",
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    content:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdf",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

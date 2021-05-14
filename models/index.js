//model hub, where I will make the associations
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comments');

// create associations
Post.belongsTo(User);

User.hasMany(Post);

Comment.belongsTo(Post);

Post.hasMany(Comment);

Comment.belongsTo(User);

User.hasMany(Comment);

module.exports = { User, Comment, Post };

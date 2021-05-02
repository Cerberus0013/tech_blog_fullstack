//model hub, where I will make the associations
const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');


//need to write associations

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Comments, {
     foreignKey: 'user_id'
 })

 Post.hasMany(Comments, {
  foreignKey:'post_id'    
 })

 Comments.belongsTo(User, {
     foreignKey: 'user_id'
 })
 
Comments.belongsTo(Post, {
    foreignKey:'post_id'
})
// Post.hasMany(Comments,{
//     foreignKey: 'post_id'
// })

module.exports = { User, Post, Comment };

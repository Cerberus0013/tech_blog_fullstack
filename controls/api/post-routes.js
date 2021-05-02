const router = require('express').Router();
const {Post, User, Comments} = require('../../models')

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'content', 'title', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comments,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {

                model: User,
                attributes: ['username']
                } 
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
   .then((dbPost) => res.json(dbPost))
   .catch((err) =>{
       console.log(err), res.status(404).json(err)
   })

   })

router.get('/:id', (req, res) => {
    Post.findOne({
        where:{
            id: req.params.id
        },
        attributes: [ 'id', 'content', 'title', 'created_at'],
        include: [ {
            model: User,
            attributes: ['username']
        }]
    }).then(dbPost => {
        if(!dbPost0){
        res.status(404).json ({message: "no post found with that id"})
        return
    } 
    res.json(dbPost)
    }).catch((err) => {
        console.log(err), res.status(404).json(err)
    })
})

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.body.user_id
    })
    .then((dbPost) => res.json(dbPost))
    .catch((err) => {
        console.log(err), res.status(4040).json({messages: "her her"})
    })
})

router.put('/:id', (req, res) => {
    Post.update ({
        title: req.body.title,
        content: req.body.content
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then((dbPost) => {
       if (!dbPost) {
           res.status(404).json({message:'No Post with that ID found'})
           return
       }
       res.json(dbPost);
     })
     .catch( err => {
         console.log(err); res.status.json(err)
     })
})

router.delete('/:id', (req, res) => {
    Post.destroy ({
        where:{
            id: req.params.id
        }
    }).then((dbPost) => {
        if(!dbPost) {
            res.status(404). json({message: "no post found with that id"})
            return;
        }
        res.json(dbPost);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


module.exports = router;
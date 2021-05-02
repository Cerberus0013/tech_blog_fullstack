const router = require('express').Router();
const { User } = require('../../models');

//GET all API USERS
router.get('/', (req, res) => {

})

//GET one API user
router.get('/:id', (req, res) => {})
//POST to user
router.post('/', (req, res) => {})

//Update/ PUT a specific user

router.put('/:id', (req,res) => {})

//DESTROY a specific User

router.delete('/:id', (req, res) => {})

module.exports = router;
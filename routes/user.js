const express = require('express')
const router  = express.Router()
const UserController = require('../controllers/user')

// create user routes
router.post('/', UserController.createUser);

router.get('/all', UserController.getAllUser)

router.get('/:id', UserController.getUser);


module.exports = router
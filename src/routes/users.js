const router = require('express').Router();

const {getUsers, getUser, createUser, deleteUser, updateUser} = require('../controllers/users')
router.get('/users', getUsers)
router.get('/users/:user_id', getUser)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.delete('/users/:id', updateUser)


module.exports = router;
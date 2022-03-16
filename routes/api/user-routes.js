const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// setting up GET and POST route at /api/user
router.route('/')
.get(getAllUsers)
.post(createUser)

// setting up GET one, PUT, and delete at /api/user/:id
router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

module.exports = router;
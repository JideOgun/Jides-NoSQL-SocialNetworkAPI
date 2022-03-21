const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
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

// // setting up route to post a friend in a single user at /api/users/:userId/friends
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)

module.exports = router;
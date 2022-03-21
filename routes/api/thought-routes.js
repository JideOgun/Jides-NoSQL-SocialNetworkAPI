const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/Thought-controller');

// setting up GET and POST route at /api/Thought
router.route('/')
.get(getAllThoughts)

// setting up the post route at /api/thoughts/:userid
router.route('/:userId').post(createThought)

// setting up GET one, PUT,remove at /api/Thought/:id
router.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

// setting up route to post a reaction in a single thought at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction)

module.exports = router;
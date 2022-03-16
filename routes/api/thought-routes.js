const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/Thought-controller');

// setting up GET and POST route at /api/Thought
router.route('/')
.get(getAllThoughts)
.post(createThought)

// setting up GET one, PUT, and delete at /api/Thought/:id
router.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

module.exports = router;
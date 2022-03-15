const { Schema, model } = require('mongoose');


const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 120

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {

    },
    reaction: {

    }
}
,
{
    toJSON: {
        getters: true
    }
}
)



module.exports = Thought;
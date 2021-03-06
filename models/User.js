const { Schema, model, Types } = require('mongoose');


const UserSchema = new Schema({

      username: {
          type: String,
          unique: true,
          required: true,
          trim: true
      },
      email: {
        type: String,
        required: [true, 'email is required'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(v)
            }
        },
        message: props => `${props.value} is not a valid email!` 
      },
      thoughts: [
          {
              type: Schema.Types.ObjectId,
              ref: 'Thought'
          }
      ],
      friends: [
          {
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
      ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema)

module.exports = User;
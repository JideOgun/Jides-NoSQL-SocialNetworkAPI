const { Schema, model } = require('mongoose');


const UserSchema = new Schema({

      username: {
          type: String,
          unique: true,
          required: true,
          trim: true
      }  ,
      email: {
        type: String,
        required: [true, 'email is required'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(v)
            }
        },
        message: props => `{$props.value} is not a valid email!` 
      },
      thoughts: [],
      friends: []
},
{
    toJSON: {
        getters: true
    }
}
)





module.exports = User;
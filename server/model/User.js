/**
Login module for admin
 */
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: (val) => {
        const re = /^[\w\d]+@[\w\d]+\.\w+$/
        return re.test(val)
      },
      message: "Email validation failed, make sure the email format is correct"
    },
    unique: true
  },
  username: {
    type: String,
    unique: true
  },
  password: String
})

// plugins
userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('user', userSchema);

module.exports = User;

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { emailErrorText, unauthorizedErrorText } = require('../utils/const.js');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => isEmail(v),
      message: emailErrorText,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  }
}, { versionKey: false });

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error(unauthorizedErrorText));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error(unauthorizedErrorText));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
const mongoose = require('mongoose');

const projectShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  projectId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('project', projectShema);
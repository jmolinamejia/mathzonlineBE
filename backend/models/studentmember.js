const mongoose = require('mongoose');

const studentmemberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Studentmember = mongoose.model('Studentmember', studentmemberSchema);

module.exports = Studentmember

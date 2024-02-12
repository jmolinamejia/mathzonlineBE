const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  gradelevel: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


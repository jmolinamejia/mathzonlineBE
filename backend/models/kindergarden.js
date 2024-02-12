const mongoose = require('mongoose');

const kindergartenSchema = new mongoose.Schema({
  correctanswers: {
    type: Number,
    required: false,
  },
  wronganswers: {
    type: Number,
    default: 0,
  },
  studentstatus: {
    type: String,
    enum: ['Not Started', 'Passed', 'Failed'],
    default: 'Not Started',
  },
  students: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'student', 
  },
});

const Kindergarten = mongoose.model('Kindergarten', kindergartenSchema);

module.exports = Kindergarten

const mongoose = require('mongoose');

const secondGradeSchema = new mongoose.Schema({
  correctanswers: {
    type: String,
    required: false,
  },
  wronganswers: {
    type: Number,
    required: false,
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

const SecondGrade = mongoose.model('SecondGrade', secondGradeSchema);

module.exports = SecondGrade

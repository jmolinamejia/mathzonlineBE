const mongoose = require('mongoose');

const fifthGradeSchema = new mongoose.Schema({
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

const FifthGrade = mongoose.model('FifthGrade', fifthGradeSchema);

module.exports = FifthGrade

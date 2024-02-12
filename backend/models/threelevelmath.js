const mongoose = require('mongoose');

const thirdGradeSchema = new mongoose.Schema({
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

const ThirdGrade = mongoose.model('ThirdGrade', thirdGradeSchema);

module.exports = ThirdGrade

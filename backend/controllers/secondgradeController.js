const asyncHandler = require('express-async-handler');
const SecondGrade = require('../models/twolevelmath');

const getSecondGrade = asyncHandler(async (req, res) => {
  try {
    const secondGradeEntries = await SecondGrade.find();
    res.status(200).json(secondGradeEntries);
  } catch (error) {
    res.status(500).json({ error: 'Error finding SecondGrade entries' });
  }
});

const createSecondGrade = asyncHandler(async (req, res) => {
  const { correctanswers, wronganswers, studentstatus, students } = req.body;

  try {
    const newSecondGradeEntry = await SecondGrade.create({
      correctanswers,
      wronganswers,
      studentstatus,
      students,
    });

    res.status(201).json(newSecondGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error creating SecondGrade entry' });
  }
});

const updateSecondGrade = asyncHandler(async (req, res) => {
  try {
    const secondGradeId = req.params.id;
    const { correctanswers, wronganswers, studentstatus, students } = req.body;

    const secondGradeEntry = await SecondGrade.findById(secondGradeId);

    if (!secondGradeEntry) {
      res.status(404).json({ error: 'SecondGrade entry not found' });
      return;
    }

    // Update fields if provided
    secondGradeEntry.correctanswers = correctanswers || secondGradeEntry.correctanswers;
    secondGradeEntry.wronganswers = wronganswers || secondGradeEntry.wronganswers;
    secondGradeEntry.studentstatus = studentstatus || secondGradeEntry.studentstatus;
    secondGradeEntry.students = students || secondGradeEntry.students;

    const updatedSecondGradeEntry = await secondGradeEntry.save();

    res.status(200).json(updatedSecondGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error updating SecondGrade entry' });
  }
});

// Delete a SecondGrade entry
const deleteSecondGrade = asyncHandler(async (req, res) => {
  try {
    const secondGradeId = req.params.id;
    const secondGradeEntry = await SecondGrade.findById(secondGradeId);

    if (!secondGradeEntry) {
      res.status(404).json({ error: 'SecondGrade entry not found' });
      return;
    }

    await secondGradeEntry.remove();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting SecondGrade entry' });
  }
});

module.exports = {
  getSecondGrade,
  createSecondGrade,
  updateSecondGrade,
  deleteSecondGrade,
};

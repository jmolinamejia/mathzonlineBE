const asyncHandler = require('express-async-handler');
const FifthGrade = require('../models/fivelevelmath');

const getFifthGrade = asyncHandler(async (req, res) => {
  try {
    const fifthGradeEntries = await FifthGrade.find();
    res.status(200).json(fifthGradeEntries);
  } catch (error) {
    res.status(500).json({ error: 'Error finding FifthGrade entries' });
  }
});

const createFifthGrade = asyncHandler(async (req, res) => {
  const { correctanswers, wronganswers, studentstatus, students } = req.body;

  try {
    const newFifthGradeEntry = await FifthGrade.create({
      correctanswers,
      wronganswers,
      studentstatus,
      students,
    });

    res.status(201).json(newFifthGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error creating FifthGrade entry' });
  }
});

const updateFifthGrade = asyncHandler(async (req, res) => {
  try {
    const fifthGradeId = req.params.id;
    const { correctanswers, wronganswers, studentstatus, students } = req.body;

    const fifthGradeEntry = await FifthGrade.findById(fifthGradeId);

    if (!fifthGradeEntry) {
      res.status(404).json({ error: 'FifthGrade entry not found' });
      return;
    }

    // Update fields if provided
    fifthGradeEntry.correctanswers = correctanswers || fifthGradeEntry.correctanswers;
    fifthGradeEntry.wronganswers = wronganswers || fifthGradeEntry.wronganswers;
    fifthGradeEntry.studentstatus = studentstatus || fifthGradeEntry.studentstatus;
    fifthGradeEntry.students = students || fifthGradeEntry.students;

    const updatedFifthGradeEntry = await fifthGradeEntry.save();

    res.status(200).json(updatedFifthGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error updating FifthGrade entry' });
  }
});

// Delete a FifthGrade entry
const deleteFifthGrade = asyncHandler(async (req, res) => {
  try {
    const fifthGradeId = req.params.id;
    const fifthGradeEntry = await FifthGrade.findById(fifthGradeId);

    if (!fifthGradeEntry) {
      res.status(404).json({ error: 'FifthGrade entry not found' });
      return;
    }

    await fifthGradeEntry.remove();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting FifthGrade entry' });
  }
});

module.exports = {
  getFifthGrade,
  createFifthGrade,
  updateFifthGrade,
  deleteFifthGrade,
};

const asyncHandler = require('express-async-handler');
const FirstGrade = require('../models/onelevelmath');

const getFirstGrade = asyncHandler(async (req, res) => {
  try {
    const firstGradeEntries = await FirstGrade.find();
    res.status(200).json(firstGradeEntries);
  } catch (error) {
    res.status(500).json({ error: 'Error finding FirstGrade entries' });
  }
});

const createFirstGrade = asyncHandler(async (req, res) => {
  const { correctanswers, wronganswers, studentstatus, students } = req.body;

  try {
    const newFirstGradeEntry = await FirstGrade.create({
      correctanswers,
      wronganswers,
      studentstatus,
      students,
    });

    res.status(201).json(newFirstGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error creating FirstGrade entry' });
  }
});

const updateFirstGrade = asyncHandler(async (req, res) => {
  try {
    const firstGradeId = req.params.id;
    const { correctanswers, wronganswers, studentstatus, students } = req.body;

    const firstGradeEntry = await FirstGrade.findById(firstGradeId);

    if (!firstGradeEntry) {
      res.status(404).json({ error: 'FirstGrade entry not found' });
      return;
    }

    // Update fields if provided
    firstGradeEntry.correctanswers = correctanswers || firstGradeEntry.correctanswers;
    firstGradeEntry.wronganswers = wronganswers || firstGradeEntry.wronganswers;
    firstGradeEntry.studentstatus = studentstatus || firstGradeEntry.studentstatus;
    firstGradeEntry.students = students || firstGradeEntry.students;

    const updatedFirstGradeEntry = await firstGradeEntry.save();

    res.status(200).json(updatedFirstGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error updating FirstGrade entry' });
  }
});

// Delete a FirstGrade entry
const deleteFirstGrade = asyncHandler(async (req, res) => {
  try {
    const firstGradeId = req.params.id;
    const firstGradeEntry = await FirstGrade.findById(firstGradeId);

    if (!firstGradeEntry) {
      res.status(404).json({ error: 'FirstGrade entry not found' });
      return;
    }

    await firstGradeEntry.remove();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting FirstGrade entry' });
  }
});

module.exports = {
  getFirstGrade,
  createFirstGrade,
  updateFirstGrade,
  deleteFirstGrade,
};

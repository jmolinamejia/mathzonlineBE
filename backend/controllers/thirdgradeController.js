const asyncHandler = require('express-async-handler');
const ThirdGrade = require('../models/threelevelmath');

const getThirdGrade = asyncHandler(async (req, res) => {
  try {
    const thirdGradeEntries = await ThirdGrade.find();
    res.status(200).json(thirdGradeEntries);
  } catch (error) {
    res.status(500).json({ error: 'Error finding ThirdGrade entries' });
  }
});

const createThirdGrade = asyncHandler(async (req, res) => {
  const { correctanswers, wronganswers, studentstatus, students } = req.body;

  try {
    const newThirdGradeEntry = await ThirdGrade.create({
      correctanswers,
      wronganswers,
      studentstatus,
      students,
    });

    res.status(201).json(newThirdGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error creating ThirdGrade entry' });
  }
});

const updateThirdGrade = asyncHandler(async (req, res) => {
  try {
    const thirdGradeId = req.params.id;
    const { correctanswers, wronganswers, studentstatus, students } = req.body;

    const thirdGradeEntry = await ThirdGrade.findById(thirdGradeId);

    if (!thirdGradeEntry) {
      res.status(404).json({ error: 'ThirdGrade entry not found' });
      return;
    }

    // Update fields if provided
    thirdGradeEntry.correctanswers = correctanswers || thirdGradeEntry.correctanswers;
    thirdGradeEntry.wronganswers = wronganswers || thirdGradeEntry.wronganswers;
    thirdGradeEntry.studentstatus = studentstatus || thirdGradeEntry.studentstatus;
    thirdGradeEntry.students = students || thirdGradeEntry.students;

    const updatedThirdGradeEntry = await thirdGradeEntry.save();

    res.status(200).json(updatedThirdGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error updating ThirdGrade entry' });
  }
});

// Delete a ThirdGrade entry
const deleteThirdGrade = asyncHandler(async (req, res) => {
  try {
    const thirdGradeId = req.params.id;
    const thirdGradeEntry = await ThirdGrade.findById(thirdGradeId);

    if (!thirdGradeEntry) {
      res.status(404).json({ error: 'ThirdGrade entry not found' });
      return;
    }

    await thirdGradeEntry.remove();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting ThirdGrade entry' });
  }
});

module.exports = {
  getThirdGrade,
  createThirdGrade,
  updateThirdGrade,
  deleteThirdGrade,
};

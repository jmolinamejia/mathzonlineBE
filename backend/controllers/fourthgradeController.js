const asyncHandler = require('express-async-handler');
const FourthGrade = require('../models/fourlevelmath');

const getFourthGrade = asyncHandler(async (req, res) => {
  try {
    const fourthGradeEntries = await FourthGrade.find();
    res.status(200).json(fourthGradeEntries);
  } catch (error) {
    res.status(500).json({ error: 'Error finding FourthGrade entries' });
  }
});

const createFourthGrade = asyncHandler(async (req, res) => {
  const { correctanswers, wronganswers, studentstatus, students } = req.body;

  try {
    const newFourthGradeEntry = await FourthGrade.create({
      correctanswers,
      wronganswers,
      studentstatus,
      students,
    });

    res.status(201).json(newFourthGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error creating FourthGrade entry' });
  }
});

const updateFourthGrade = asyncHandler(async (req, res) => {
  try {
    const fourthGradeId = req.params.id;
    const { correctanswers, wronganswers, studentstatus, students } = req.body;

    const fourthGradeEntry = await FourthGrade.findById(fourthGradeId);

    if (!fourthGradeEntry) {
      res.status(404).json({ error: 'FourthGrade entry not found' });
      return;
    }

    // Update fields if provided
    fourthGradeEntry.correctanswers = correctanswers || fourthGradeEntry.correctanswers;
    fourthGradeEntry.wronganswers = wronganswers || fourthGradeEntry.wronganswers;
    fourthGradeEntry.studentstatus = studentstatus || fourthGradeEntry.studentstatus;
    fourthGradeEntry.students = students || fourthGradeEntry.students;

    const updatedFourthGradeEntry = await fourthGradeEntry.save();

    res.status(200).json(updatedFourthGradeEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error updating FourthGrade entry' });
  }
});

// Delete a FourthGrade entry
const deleteFourthGrade = asyncHandler(async (req, res) => {
  try {
    const fourthGradeId = req.params.id;
    const fourthGradeEntry = await FourthGrade.findById(fourthGradeId);

    if (!fourthGradeEntry) {
      res.status(404).json({ error: 'FourthGrade entry not found' });
      return;
    }

    await fourthGradeEntry.remove();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting FourthGrade entry' });
  }
});

module.exports = {
  getFourthGrade,
  createFourthGrade,
  updateFourthGrade,
  deleteFourthGrade,
};

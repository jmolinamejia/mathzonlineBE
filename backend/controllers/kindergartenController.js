const asyncHandler = require('express-async-handler');
const Kindergarten = require('../models/kindergarden');

const getKindergarten = asyncHandler(async (req, res) => {
  try {
    const kindergartenEntries = await Kindergarten.find();
    res.status(200).json(kindergartenEntries);
  } catch (error) {
    res.status(500).json({ error: 'Error finding Kindergarten entries' });
  }
});

const createKindergarten = asyncHandler(async (req, res) => {
  const { correctanswers, wronganswers, studentstatus, students } = req.body;

  try {
    const newKindergartenEntry = await Kindergarten.create({
      correctanswers,
      wronganswers,
      studentstatus,
      students,
    });

    res.status(201).json(newKindergartenEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error creating Kindergarten entry' });
  }
});

const updateKindergarten = asyncHandler(async (req, res) => {
  try {
    const kindergartenId = req.params.id;
    const { correctanswers, wronganswers, studentstatus, students } = req.body;

    const kindergartenEntry = await Kindergarten.findById(kindergartenId);

    if (!kindergartenEntry) {
      res.status(404).json({ error: 'Kindergarten entry not found' });
      return;
    }

    // Update fields if provided
    kindergartenEntry.correctanswers = correctanswers || kindergartenEntry.correctanswers;
    kindergartenEntry.wronganswers = wronganswers || kindergartenEntry.wronganswers;
    kindergartenEntry.studentstatus = studentstatus || kindergartenEntry.studentstatus;
    kindergartenEntry.students = students || kindergartenEntry.students;

    const updatedKindergartenEntry = await kindergartenEntry.save();

    res.status(200).json(updatedKindergartenEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error updating Kindergarten entry' });
  }
});

// Delete a Kindergarten entry
const deleteKindergarten = asyncHandler(async (req, res) => {
  try {
    const kindergartenId = req.params.id;
    const kindergartenEntry = await Kindergarten.findById(kindergartenId);

    if (!kindergartenEntry) {
      res.status(404).json({ error: 'Kindergarten entry not found' });
      return;
    }

    await kindergartenEntry.remove();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting Kindergarten entry' });
  }
});

module.exports = {
  getKindergarten,
  createKindergarten,
  updateKindergarten,
  deleteKindergarten,
};

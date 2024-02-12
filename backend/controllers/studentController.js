const asyncHandler = require('express-async-handler');
const Student = require('../models/student');

const createStudent = asyncHandler(async (req, res) => {
  try {
    const { username, gradelevel, password } = req.body;

    const newStudent = await Student.create({
      username,
      gradelevel,
      password,
    });

    res.status(201).json({ message: 'Student created successfully', student: newStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const getAllStudents = asyncHandler(async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const updateStudent = asyncHandler(async (req, res) => {
  try {
    const studentId = req.params.id;
    const { username, gradelevel, password } = req.body;

    const student = await Student.findById(studentId);
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
      return;
    }

    // Update the student's information
    student.username = username || student.username;
    student.gradelevel = gradelevel || student.gradelevel;
    student.password = password || student.password;

    const updatedStudent = await student.save();

    res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const deleteStudent = asyncHandler(async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
      return;
    }

    await student.remove();

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
};

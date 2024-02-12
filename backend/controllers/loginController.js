const asyncHandler = require('express-async-handler');
const Studentmember = require('../models/studentmember');

const loginStudent = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const student = await Studentmember.findOne({ username });

  if (!student) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  if (password !== student.password) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }


  res.status(200).json({ message: 'Login successful', user: student });
});

module.exports = { loginStudent };


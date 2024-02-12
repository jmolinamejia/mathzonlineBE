const express = require('express');
const router = express.Router();
const {
  getFirstGrade,
  createFirstGrade,
  updateFirstGrade,
  deleteFirstGrade,
} = require('../controllers/firstgradeController');

router.get('/firstgrade', getFirstGrade);
router.post('/firstgrade', createFirstGrade);
router.put('/firstgrade/:id', updateFirstGrade);
router.delete('/firstgrade/:id', deleteFirstGrade);

module.exports = router;

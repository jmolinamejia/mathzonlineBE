const express = require('express');
const router = express.Router();
const {
  getSecondGrade,
  createSecondGrade,
  updateSecondGrade,
  deleteSecondGrade,
} = require('../controllers/secondgradeController');

router.get('/secondgrade', getSecondGrade);
router.post('/secondgrade', createSecondGrade);
router.put('/secondgrade/:id', updateSecondGrade);
router.delete('/secondgrade/:id', deleteSecondGrade);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  getFourthGrade,
  createFourthGrade,
  updateFourthGrade,
  deleteFourthGrade,
} = require('../controllers/fourthgradeController');

router.get('/fourthgrade', getFourthGrade);
router.post('/fourthgrade', createFourthGrade);
router.put('/fourthgrade/:id', updateFourthGrade);
router.delete('/fourthgrade/:id', deleteFourthGrade);

module.exports = router;

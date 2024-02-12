const express = require('express');
const router = express.Router();
const {
  getFifthGrade,
  createFifthGrade,
  updateFifthGrade,
  deleteFifthGrade,
} = require('../controllers/fifthgradeController');

router.get('/fifthgrade', getFifthGrade);
router.post('/fifthgrade', createFifthGrade);
router.put('/fifthgrade/:id', updateFifthGrade);
router.delete('/fifthgrade/:id', deleteFifthGrade);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  getThirdGrade,
  createThirdGrade,
  updateThirdGrade,
  deleteThirdGrade,
} = require('../controllers/thirdgradeController');

router.get('/thirdgrade', getThirdGrade);
router.post('/thirdgrade', createThirdGrade);
router.put('/thirdgrade/:id', updateThirdGrade);
router.delete('/thirdgrade/:id', deleteThirdGrade);

module.exports = router;

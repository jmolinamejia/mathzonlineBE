const express = require('express');
const router = express.Router();
const {
  getKindergarten,
  createKindergarten,
  updateKindergarten,
  deleteKindergarten,
} = require('../controllers/kindergartenController');

router.get('/kindergarten', getKindergarten);
router.post('/kindergarten', createKindergarten);
router.put('/kindergarten/:id', updateKindergarten);
router.delete('/kindergarten/:id', deleteKindergarten);

module.exports = router;

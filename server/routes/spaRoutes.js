const express = require('express');
const { getSpas, createSpa } = require('../controllers/spaController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(getSpas)
  .post(protect, authorize('manager', 'Santt'), createSpa);

module.exports = router;

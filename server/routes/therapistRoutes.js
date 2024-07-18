const express = require('express');
const { getTherapists, createTherapist } = require('../controllers/therapistController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(getTherapists)
  .post(protect, authorize('manager', 'Santt'), createTherapist);

module.exports = router;

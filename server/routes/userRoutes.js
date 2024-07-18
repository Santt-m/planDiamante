const express = require('express');
const { registerUser, loginUser, getUsers, updateUserRole } = require('../controllers/userController');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.route('/')
  .get(protect, authorize('Santt'), getUsers)
  .put(protect, authorize('Santt'), updateUserRole);

module.exports = router;

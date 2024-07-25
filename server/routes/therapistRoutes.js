// server/routes/therapistRoutes.js

const express = require('express');
const { getTherapists, getTherapist, createTherapist, updateTherapist, deleteTherapist } = require('../controllers/therapistController');
const router = express.Router();

// Rutas crear un nuevo terapeuta
router.route('/')
  .get(getTherapists)
  .post(createTherapist);

// Obtener todos los terapeutas
router.get('/', async (req, res) => {
  try {
      const therapists = await Therapist.find();
      res.json(therapists);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// Rutas para obtener, actualizar y eliminar un terapeuta por ID
router.route('/:id')
  .get(getTherapist)
  .put(updateTherapist)
  .delete(deleteTherapist);

module.exports = router;

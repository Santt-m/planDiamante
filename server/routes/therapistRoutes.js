const express = require('express');
const { getTherapists, getTherapist, createTherapist, updateTherapist, deleteTherapist } = require('../controllers/therapistController');
const router = express.Router();

// Rutas para obtener todos los terapeutas y crear un nuevo terapeuta
router.route('/')
  .get(getTherapists)
  .post(createTherapist);

// Rutas para obtener, actualizar y eliminar un terapeuta por ID
router.route('/:id')
  .get(getTherapist)
  .put(updateTherapist)
  .delete(deleteTherapist);

module.exports = router;

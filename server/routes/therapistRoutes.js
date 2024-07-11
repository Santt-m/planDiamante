const express = require('express');
const router = express.Router();
const therapistController = require('../controllers/therapistController');

// Ruta para crear un nuevo terapeuta
router.post('/', therapistController.createTherapist);

// Ruta para obtener todos los terapeutas
router.get('/', therapistController.getAllTherapists);

// Ruta para obtener un terapeuta por su ID
router.get('/:id', therapistController.getTherapistById);

// Ruta para actualizar un terapeuta por su ID
router.put('/:id', therapistController.updateTherapist);

// Ruta para eliminar un terapeuta por su ID
router.delete('/:id', therapistController.deleteTherapist);

module.exports = router;

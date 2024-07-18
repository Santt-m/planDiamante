const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL de la imagen
    required: true
  }
});

const Therapist = mongoose.model('Therapist', therapistSchema);
module.exports = Therapist;

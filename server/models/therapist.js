const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  description: { type: String },
  // Puedes añadir más campos según tus necesidades
});

module.exports = mongoose.model('Therapist', therapistSchema);

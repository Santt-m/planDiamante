const mongoose = require('mongoose');

const spaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  // Puedes añadir más campos según tus necesidades
});

module.exports = mongoose.model('Spa', spaSchema);

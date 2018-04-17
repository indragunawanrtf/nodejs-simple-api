const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
  name: String,
  platNumber: String,
  description: String,
  productionYear: Number
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
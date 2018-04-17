const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: String,
  no_telp: String,
  service: String,
  plat_number: String,
  location: String,
  notes: String
});

module.exports = mongoose.model('Customer', customerSchema);

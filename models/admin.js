const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Check if the model already exists before defining it
module.exports = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
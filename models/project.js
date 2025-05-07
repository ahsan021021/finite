const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  technologies: { type: [String], required: true },
  liveUrl: { type: String },
  githubUrl: { type: String },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Check if the model already exists before defining it
module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
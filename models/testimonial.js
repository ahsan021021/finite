const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  company: { type: String },
  content: { type: String, required: true },
  imageUrl: { type: String },
  rating: { type: Number, required: true },
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Check if the model already exists before defining it
module.exports = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
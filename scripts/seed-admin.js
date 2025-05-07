const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin"); // Adjust the path if needed
require("dotenv").config(); // Load environment variables

async function seedAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Check if the admin user already exists
    const existingAdmin = await Admin.findOne({ email: "admin@example.com" });
    if (existingAdmin) {
      console.log("Admin user already exists:", existingAdmin.email);
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // Create the admin user
    const admin = new Admin({
      email: "admin@example.com",
      password: hashedPassword,
      name: "Super Admin",
    });

    await admin.save();
    console.log("Admin user created successfully:", admin.email);
  } catch (error) {
    console.error("Error seeding admin user:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seedAdmin();
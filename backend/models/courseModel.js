const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  instructorId: { type: String, required: true },
  studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  schedule: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model("courses", CourseSchema);

module.exports = Course;

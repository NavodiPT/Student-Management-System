const express = require("express");
const router = express.Router();
const Course = require("../models/courseModel");

//Create new course
router.post("/addCourse", async (req, res) => {
  const { courseId, title, description, instructorId, schedule } = req.body;

  try {
    const existingCourse = await Course.findOne({ courseId });
    if (existingCourse)
      return res.status(400).json({ error: "Course ID already exists" });

    const newCourse = new Course({
      courseId,
      title,
      description,
      instructorId,
      schedule,
    });

    await newCourse.save();
    res
      .status(201)
      .json({ message: "Course added successfully", course: newCourse });
  } catch (error) {
    res.status(500).json({ error: "Error adding course" });
  }
});

//Fetch all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Failed to fetch courses. Try again." });
  }
});

//Fetch relevant course
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching course", error);
    res.status(500).json({ error: "Failed to fetch course. Try again." });
  }
});

//Update course
router.put("/:id", async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id , req.body, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error("Error updating course", error);
    res.status(500).json({ error: "Failed to update course. Try again." });
  }
});

//Delete course
router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Error deleting course" });
  }
});

module.exports = router;

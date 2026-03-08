import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
  try {
    const { name } = req.body;

    const student = await Student.create({
      name,
      parent: req.user._id,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: "Failed to create student" });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({ parent: req.user._id });

    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students" });
  }
};

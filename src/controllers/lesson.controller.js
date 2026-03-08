import Lesson from "../models/Lesson.js";

export const createLesson = async (req, res) => {
  try {
    const { title, description } = req.body;

    const lesson = await Lesson.create({
      title,
      description,
      mentor: req.user._id,
    });

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: "Lesson creation failed" });
  }
};

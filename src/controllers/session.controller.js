import Session from "../models/Session.js";

export const createSession = async (req, res) => {
  try {
    const { lessonId, date, topic, summary } = req.body;

    const session = await Session.create({
      lesson: lessonId,
      date,
      topic,
      summary,
    });

    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: "Session creation failed" });
  }
};

export const getLessonSessions = async (req, res) => {
  try {
    const sessions = await Session.find({
      lesson: req.params.id,
    });

    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sessions" });
  }
};

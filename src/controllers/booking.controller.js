import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const { studentId, lessonId } = req.body;

    const booking = await Booking.create({
      student: studentId,
      lesson: lessonId,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Booking failed" });
  }
};

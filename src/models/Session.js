import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },

    date: Date,

    topic: String,

    summary: String,
  },
  { timestamps: true },
);

export default mongoose.model("Session", sessionSchema);

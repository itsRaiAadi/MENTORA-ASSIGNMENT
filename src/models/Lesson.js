import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Lesson", lessonSchema);

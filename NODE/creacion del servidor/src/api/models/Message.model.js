const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: {
      type: String,
      enum: ["private", "public"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    recipientCharacter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character",
    },
    recipientMovie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
    recipientUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
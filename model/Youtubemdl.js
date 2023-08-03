const mongoose = require("mongoose");

const youtubeLinks = mongoose.Schema(
  {
    title: { type: String, require: true },
    youtubeLink: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("youtubeLinks", youtubeLinks);

const mongoose = require("mongoose");

const addLInk_schema = mongoose.Schema(
  {
    link: { type: String, require: true },
    lable: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Links", addLInk_schema);

const mongoose = require("mongoose");
const contactus = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phoneNo: { type: String },
    enquiryNote: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("contactus", contactus);

const mongoose = require("mongoose");

const formPrice = mongoose.Schema(
  {
    learningDL: { type: Number },
    permanantDl: { type: Number },
    renewDl: { type: Number },
    eGazzet: { type: Number },
    foodLicence: { type: Number },
    companyGST: { type: Number },
    individualGST: { type: Number },
    panCard: { type: Number },
    passport: { type: Number },
    shopAct: { type: Number },
    udhamAdhar: { type: Number },
    voteCard: { type: Number },
    ageDomacile: { type: Number },
    EWS: { type: Number },
    nonCriminal: { type: Number },
    income: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("formPrice", formPrice);

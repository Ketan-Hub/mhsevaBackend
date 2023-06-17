const mongoose = require("mongoose");
const incomeCerSchema = mongoose.Schema(
  {
    statusfname: { type: String},
    fullName_English: { type: String },
    fullName_Marathi: { type: String },
    fatherName_english: { type: String },
    fatherName_marathi: { type: String },
    incoCerYear: { type: String },
    BirthDate: { type: String },
    age: { type: Number },
    Gender: { type: String },
    work_type: { type: String },
    phoneNUm: { type: Number },
    email: { type: String },
    PanNo: { type: String },
    AdharNo: { type: String },
    address: { type: String },
    strateName: { type: String },
    depart: { type: String },
    Building: { type: String },
    landmark: { type: String },
    district: { type: String },
    taluka: { type: String },
    village: { type: String },
    pincode: { type: Number },
    family: [
      {
        relation: { type: String },
        Name: { type: String },
        AgeOfRelative: { type: String },
        WorkTypeOfRelative: { type: String },
        incomeOfRelative: { type: String },
      },
    ],
    relationOfApplicant: { type: String },
    statusOfApplicant: { type: String },
    NameOfApplicant: { type: String },
    ReasonOfApllication: { type: String },
    distibutionOfIncomefromAgri: [
      {
        accountHolder_Name: { type: String },
        totalfarm: { type: String },
        accountHolder_DIstrict: { type: String },
        accountHolder_Taluka: { type: String },
        accountHolder_village: { type: String },
      },
    ],
    familyIncomeType: { type: String },
    incomeYear: [
      {
        year: { type: String },
        Income: { type: Number },
      },
    ],
    IncomeTypeDiscription: { type: String },
    IncomeDOcsName: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("incomeCertificate", incomeCerSchema);

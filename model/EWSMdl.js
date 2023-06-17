const mongoose = require("mongoose");
const EWSSChema = mongoose.Schema(
  {
    statusfname: { type: String },
    fullName_English: { type: String },
    fullName_Marathi: { type: String },
    fatherName_english: { type: String },
    fatherName_marathi: { type: String },
    incoCerYear: { type: String },
    BirthDate: { type: String },
    // age: { type: Number },
    // Gender: { type: String },
    // Bussness:{type:String},
    // phoneNUm: { type: Number },
    // email: { type: String },
    // AdharNo: { type: String },

    // Applicant_address: { type: String },
    // Applicant_street: { type: String },
    // Applicant_Building: { type: String },
    // Applicant_vasti: { type: String },
    // Applicant_PopularPlace: { type: String },
    // Applicant_district: { type: String },
    // Applicant_taluka: { type: String },
    // Applicant_village: { type: String },
    // Applicant_pincode: { type: Number },

    // relationOfBanificiaryWithApplicant: { type: String },
    // Benificiary_Address: { type: String },
    // Benificiary_Name_English: { type: String },
    // Benificiary_Name_marathi: { type: String },
    // Benificiary_Dob: { type: String },
    // Benificiary_gender: { type: String },
    // Benificiary_mobNumber: { type: String },
    // Benificiary_Email: { type: String },
    // Benificiary_AdharNo: { type: String },
    // benificiary_Cast: { type: String },
    // Income_Source: [
    //   {
    //     SourceType: { type: String },
    //     year: [
    //       {
    //         years: { type: String },
    //         amount: { type: Number },
    //       },
    //     ],
    //   },
    // ],


  },
  { timestamps: true }
);
module.exports = mongoose.model("EWSSertificate", EWSSChema);

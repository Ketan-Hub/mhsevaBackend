const { body } = require("express-validator");
const mongoose = require("mongoose");
const EWSSChema = mongoose.Schema(
  {
    application_type: { type: String },
    status: { type: String },
    createdBy: { type: String },
    createdByName: { type: String },
    Data: {
      statusfname: { type: String },
      fullName_English: { type: String },
      fullName_Marathi: { type: String },
      fatherName_english: { type: String },
      fatherName_marathi: { type: String },
      BirthDate: { type: String },
      age: { type: Number },
      Gender: { type: String },
      Bussness: { type: String },
      phoneNUm: { type: Number },
      email: { type: String },
      AdharNo: { type: String },
      Applicant_address: { type: String },
      Applicant_street: { type: String },
      Applicant_Building: { type: String },
      Applicant_locality: { type: String },
      Applicant_landmark: { type: String },
      Applicant_district: { type: String },
      Applicant_taluka: { type: String },
      Applicant_village: { type: String },
      Applicant_pincode: { type: Number },
    },
    benificiary_info: {
      relationOfBanificiaryWithApplicant: { type: String },
      Benificiary_Name_English: { type: String },
      Benificiary_Name_marathi: { type: String },
      Benificiary_Dob: { type: String },
      Benificiary_gender: { type: String },
      Benificiary_mobNumber: { type: String },
      Benificiary_Email: { type: String },
      Benificiary_AdharNo: { type: String },
      benificiary_occupation: { type: String },
      Benificiary_Address: { type: String },
      Benificiary_street: { type: String },
      Benificiary_building: { type: String },
      Benificiary_locality: { type: String },
      Benificiary_landmark: { type: String },
      Benificiary_District: { type: String },
      Benificiary_taluka: { type: String },
      Benificiary_village: { type: String },
      Benificiary_pincode: { type: String },
      benificiary_cast: { type: String },
    },
    permanant_address: {
      permanant_address: { type: String },
      permanant_street: { type: String },
      permanant_Bulding: { type: String },
      permanant_locality: { type: String },
      permanant_landmark: { type: String },
      permanant_district: { type: String },
      permanant_taluka: { type: String },
      permanant_village: { type: String },
      permanant_pincode: { type: String },
    },
    migration: {
      migration_state: { type: String },
      migration_district: { type: String },
      migration_taluka: { type: String },
      migration_village: { type: String },
      migration_fromDate: { type: String },
      migration_endDate: { type: String },
      migration_year: { type: String },
    },
    benificiary_father_details: {
      benificiaryFather_fullName_english: { type: String },
      benificiaryFather_fullName_marathi: { type: String },
      benificiaryFather_DOB: { type: String },
      benificiaryFather_gender: { type: String },
      benificiaryFather_occupation: { type: String },
      benificiaryFather_mobileNO: { type: String },
      benificiaryFather_email: { type: String },
      benificiaryFather_UID: { type: String },
      benificiaryFather_Address: { type: String },
      benificiaryFather_street: { type: String },
      benificiaryFather_building: { type: String },
      benificiaryFather_Locality: { type: String },
      benificiaryFather_Landmark: { type: String },
      benificiaryFather_District: { type: String },
      benificiaryFather_Taluka: { type: String },
      benificiaryFather_Village: { type: String },
      benificiaryFather_PinCode: { type: String },
      benificiaryFather_cast: { type: String },
    },
    land_info: {
      land_salutation: { type: String },
      land_holderName_english: { type: String },
      land_holderName_marathi: { type: String },
      land_holder_relation: { type: String },
      land_holder_district: { type: String },
      land_holder_taluka: { type: String },
      land_holder_village: { type: String },
      land_holder_pincode: { type: String },
      land_holder_groupNO: { type: String },
      land_holder_area: { type: String },
      is_land_outside_village: { type: String },
    },
    Income_salary: { type: String },
    Income_business: { type: String },
    Income_agriculture: { type: String },
    Income_investment: { type: String },
    Income_others: { type: String },
    total: { type: String },
    formPrice: { type: Number },
    note: { type: String },
    rejNote:{type:String},
    subNote:{type:String},
    compNote:{type:String},
    //uploads
    acknowledgmentDocument: { type: String },
    finalDocument: { type: String },
    reshaCard: { type: String },
    adharCard: { type: String },
    lightBill: { type: String },
    schoolLeaveCertificate: { type: String },
    photo: { type: String },
    incomeCertficate3yearOrForm16: { type: String },
    castProof: { type: String },
    selfDeclearation: { type: String },
    isNew:{type:Boolean,default:true},

  },
  { timestamps: true }
);
module.exports = mongoose.model("EWSSertificate", EWSSChema);

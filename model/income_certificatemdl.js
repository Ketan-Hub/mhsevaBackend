const mongoose = require("mongoose");
const incomeCerSchema = mongoose.Schema(
  {
    application_type:{type:String},
    status:{type:String},
    createdBy:{type:String},
    createdByName:{type:String},
    Data:[{
    // statusfname: { type: String},
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
    streetName: { type: String },
    depart: { type: String },
    Building: { type: String },
    landmark: { type: String },
    district: { type: String },
    taluka: { type: String },
    village: { type: String },
    pincode: { type: Number },
    relationOfApplicant: { type: String },
    statusOfApplicant: { type: String },
    NameOfApplicant: { type: String },
    ReasonOfApllication: { type: String },
    ReasonOfincome_get:{type:String},
    IncomeDOcsName: { type: String },
    formPrice :{type: Number}

    }],
    family: {type:Array},
    distibutionOfIncomefromAgri: {type:Array},
    incomeSource:{type:Array},
    retailerName:{type:String},
    note:{type:String},
    //uploads
    acknowledgmentDocument:{type:String},
    finalDocument:{type:String},
    reshaCard:{type:String},
    adharCard:{type:String},
    lightBill:{type:String},
    photo:{type:String},
    form16:{type:String},
    consentform:{type:String},
    selfDeclearation:{type:String}
  },
  { timestamps: true }
);
module.exports = mongoose.model("incomeCertificate", incomeCerSchema);

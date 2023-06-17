const mongoose = require("mongoose");
const UdhamAdharSchema = mongoose.Schema({
  Title: { type: String, required: true,enum:['Mr','MRS','Ms'] },
  Owner_Name: { type: String, required: true },
  PAN_Card: { type: String, required: true },
  Adhar_Card_no: { type: String, required: true },
  GST_Number: { type: String },
  Social_Category: { type: String, required: true },
  Gender :{type:String,enum:['male','female','Other']},
  Shop_Name: { type: String, required: true },
  Mobile_Number: { type: Number, required: true },
  email: { type: String, required: true },
  Number_of_Employee: { type: Number, required: true },
  Business_Started_Date: { type: String, required: true },
  Shop_Address: { type: String, required: true },
  Nature_Of_Business: { type: String, required: true },
  Investment_Rs: { type: Number, required: true },
  Bank_Name: { type: String, required: true },
  Bank_Account_Number: { type: Number, required: true },
  Bank_IFSC_Code: { type: String, required: true },
  //uploads
  Aadhar_Upload_Card: { type: String},
  Pan_Upload_Card: { type: String },
  Passport: { type: String },
  Bank_Upload_Passbook: { type: String},
});
module.exports=mongoose.model('udhamadhar',UdhamAdharSchema)

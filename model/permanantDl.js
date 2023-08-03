const mongoose = require("mongoose");

const permanantsDLSchema = mongoose.Schema(
  {
    application_type:{type:String},
    status:{type:String},
    createdBy:{type:String},
    createdByName:{type:String},
    state: {
      type: String,
      
    },

    rto: {
      type: String,
      
    },

    vehical_type: {
      type: String,
      
    },

    learningLicenceNo: {
      type: Number,
      
    },

    application_first_name: {
      type: String,
      
    },

    application_middle_name: {
      type: String,
      
    },

    application_last_name: {
      type: String,
      
    },

    relation: {
      type: String,
      
    },

    fullname_asper_record: {
      type: String,
      
    },

    gender: {
      type: String,
      
    },

    Dob: {
      type: String,
      
    },

    pob: {
      type: String,
      
    },

    cob: {
      type: String,
      
    },

    qualification: {
      type: String,
      
    },

    blood_group: {
      type: String,
      
    },

    mobile_No: {
      type: Number,
      
    },

    email: {
      type: String,
      
    },

    identification_mark1: {
      type: Number,
    },

    identification_mark2: {
      type: Number,
    },
    isNew:{type:Boolean,default:true},


    emergency_mobNo: {
      type: Number,
    },

    present_Address_State: {
      type: String,
      
    },

    present_Address_Distict: {
      type: String,
      
    },
    present_Address_tehsil: {
      type: String,
      
    },

    Present_Address_Village: {
      type: String,
    },
    Present_Address_Line_1: {
      type: String,
    },

    Present_Address_Line_2: {
      type: String,
    },

    present_Adderess_PinCode: {
      type: Number,
      
    },

    present_Address_Same_AS_Premant_Address: {
      type: String,
      
    },
    note:{type:String},
    //uploads
    acknowledgmentDocument:{type:String},
    finalDocument:{type:String},

    addressProof: {
      type: String,
    },

    ageProof: {
      type: String,
    },
    rejNote:{type:String},
    subNote:{type:String},
    compNote:{type:String},
  
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("permanantsDL", permanantsDLSchema);

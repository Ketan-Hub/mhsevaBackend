const mongoose = require("mongoose");

const permanantsDLSchema = mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },

    rto: {
      type: String,
      required: true,
    },

    vehical_type: {
      type: String,
      required: true,
    },

    learningLicenceNo: {
      type: Number,
      required: true,
    },

    application_first_name: {
      type: String,
      required: true,
    },

    application_middle_name: {
      type: String,
      required: true,
    },

    application_last_name: {
      type: String,
      required: true,
    },

    relation: {
      type: String,
      required: true,
    },

    fullname_asper_record: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "others"],
    },

    Dob: {
      type: String,
      required: true,
    },

    pob: {
      type: String,
      required: true,
    },

    cob: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    blood_group: {
      type: String,
      required: true,
    },

    mobile_No: {
      type: Number,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    identification_mark1: {
      type: Number,
    },

    identification_mark2: {
      type: Number,
    },

    emergency_mobNo: {
      type: Number,
    },

    present_Address_State: {
      type: String,
      required: true,
    },

    present_Address_Distict: {
      type: String,
      required: true,
    },
    present_Address_tehsil: {
      type: String,
      required: true,
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
      required: true,
    },

    present_Address_Same_AS_Premant_Address: {
      type: Boolean,
      required: true,
    },

    addressProof: {
      type: String,
    },

    ageProof: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("permanantsDL", permanantsDLSchema);

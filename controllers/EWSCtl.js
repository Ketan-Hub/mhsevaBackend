const Ews = require("../model/EWSMdl");
const uploadToS3 = require('../validator/midalware');

exports.createEws = async (req, res) => {
  const {
  
    application_type,
    status,
    createdBy,
    createdByName,
    Data: {
      statusfname,
      fullName_English,
      fullName_Marathi,
      fatherName_english,
      fatherName_marathi,
      BirthDate,
      age,
      Gender,
      Bussness,
      phoneNUm,
      email,
      AdharNo,
      Applicant_address,
      Applicant_street,
      Applicant_Building,
      Applicant_locality,
      Applicant_landmark,
      Applicant_district,
      Applicant_taluka,
      Applicant_village,
      Applicant_pincode,
    },
    benificiary_info: {
      relationOfBanificiaryWithApplicant,
      Benificiary_Name_English,
      Benificiary_Name_marathi,
      Benificiary_Dob,
      Benificiary_gender,
      Benificiary_mobNumber,
      Benificiary_Email,
      Benificiary_AdharNo,
      benificiary_occupation,
      Benificiary_Address,
      Benificiary_street,
      Benificiary_building,
      Benificiary_locality,
      Benificiary_landmark,
      Benificiary_District,
      Benificiary_taluka,
      Benificiary_village,
      Benificiary_pincode,
      benificiary_cast,
    },
    permanant_address: {
      permanant_address,
      permanant_street,
      permanant_Bulding,
      permanant_locality,
      permanant_landmark,
      permanant_district,
      permanant_taluka,
      permanant_village,
      permanant_pincode,
    },
    migration: {
      migration_state,
      migration_district,
      migration_taluka,
      migration_village,
      migration_fromDate,
      migration_endDate,
      migration_year,
    },
    benificiary_father_details: {
      benificiaryFather_fullName_english,
      benificiaryFather_fullName_marathi,
      benificiaryFather_DOB,
      benificiaryFather_gender,
      benificiaryFather_occupation,
      benificiaryFather_mobileNO,
      benificiaryFather_email,
      benificiaryFather_UID,
      benificiaryFather_Address,
      benificiaryFather_street,
      benificiaryFather_building,
      benificiaryFather_Locality,
      benificiaryFather_Landmark,
      benificiaryFather_District,
      benificiaryFather_Taluka,
      benificiaryFather_Village,
      benificiaryFather_PinCode,
      benificiaryFather_cast,
    },
    land_info: {
      land_salutation,
      land_holderName_english,
      land_holderName_marathi,
      land_holder_relation,
      land_holder_district,
      land_holder_taluka,
      land_holder_village,
      land_holder_pincode,
      land_holder_groupNO,
      land_holder_area,
      is_land_outside_village,
    },
    Income_salary,
    Income_business,
    Income_agriculture,
    Income_investment,
    Income_others,
    total,
    formPrice,
    rejNote,
    subNote,
    compNote,
    
   
  } = req.body;
  const ews = new Ews({
    application_type,
    status,
    createdBy,
    createdByName,
    Data: {
      statusfname,
      fullName_English,
      fullName_Marathi,
      fatherName_english,
      fatherName_marathi,
      BirthDate,
      age,
      Gender,
      Bussness,
      phoneNUm,
      email,
      AdharNo,
      Applicant_address,
      Applicant_street,
      Applicant_Building,
      Applicant_locality,
      Applicant_landmark,
      Applicant_district,
      Applicant_taluka,
      Applicant_village,
      Applicant_pincode,
    },
    benificiary_info: {
      relationOfBanificiaryWithApplicant,
      Benificiary_Name_English,
      Benificiary_Name_marathi,
      Benificiary_Dob,
      Benificiary_gender,
      Benificiary_mobNumber,
      Benificiary_Email,
      Benificiary_AdharNo,
      benificiary_occupation,
      Benificiary_Address,
      Benificiary_street,
      Benificiary_building,
      Benificiary_locality,
      Benificiary_landmark,
      Benificiary_District,
      Benificiary_taluka,
      Benificiary_village,
      Benificiary_pincode,
      benificiary_cast,
    },
    permanant_address: {
      permanant_address,
      permanant_street,
      permanant_Bulding,
      permanant_locality,
      permanant_landmark,
      permanant_district,
      permanant_taluka,
      permanant_village,
      permanant_pincode,
    },
    migration: {
      migration_state,
      migration_district,
      migration_taluka,
      migration_village,
      migration_fromDate,
      migration_endDate,
      migration_year,
    },
    benificiary_father_details: {
      benificiaryFather_fullName_english,
      benificiaryFather_fullName_marathi,
      benificiaryFather_DOB,
      benificiaryFather_gender,
      benificiaryFather_occupation,
      benificiaryFather_mobileNO,
      benificiaryFather_email,
      benificiaryFather_UID,
      benificiaryFather_Address,
      benificiaryFather_street,
      benificiaryFather_building,
      benificiaryFather_Locality,
      benificiaryFather_Landmark,
      benificiaryFather_District,
      benificiaryFather_Taluka,
      benificiaryFather_Village,
      benificiaryFather_PinCode,
      benificiaryFather_cast,
    },
    land_info: {
      land_salutation,
      land_holderName_english,
      land_holderName_marathi,
      land_holder_relation,
      land_holder_district,
      land_holder_taluka,
      land_holder_village,
      land_holder_pincode,
      land_holder_groupNO,
      land_holder_area,
      is_land_outside_village,
    },
    Income_salary,
    Income_business,
    Income_agriculture,
    Income_investment,
    Income_others,
    total,
    formPrice,
    rejNote,
    subNote,
    compNote,
   

  });

  ews
    .save()
    .then((data) => {
      // console.log(data)
      res.status(201).json({ data });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error: error.message });
    });
};

exports.getEws = async (req, res) => {
  console.log(res);
  try {
    const getusers = await Ews.find();
    res.json(getusers);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingEws = async (req, res) => {
  try {
    const user = await Ews.find({ _id: req.params.id });
    res.json(user);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateEws = (req, res) => {
  Ews.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.reshaCard = async(req, res) => {
  let reshaCard;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    reshaCard =Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { reshaCard })
    .then((data) => {
      res.status(200).json({
        message: "reshaCard updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.adharCard = async(req, res) => {
  let adharCard;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    adharCard =Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { adharCard })
    .then((data) => {
      res.status(200).json({
        message: "adharCard updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.lightBill = async(req, res) => {
  let lightBill;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    lightBill =Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { lightBill })
    .then((data) => {
      res.status(200).json({
        message: "adharCard updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.schoolLeaveCertificate =async (req, res) => {
  let schoolLeaveCertificate;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    schoolLeaveCertificate =Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { schoolLeaveCertificate })
    .then((data) => {
      res.status(200).json({
        message: "school Leave Certificate updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.photo = async(req, res) => {
  let photo;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    photo =Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { photo })
    .then((data) => {
      res.status(200).json({
        message: "photo updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.incomeCertficate3yearOrForm16 = async(req, res) => {
  let incomeCertficate3yearOrForm16;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    incomeCertficate3yearOrForm16 =Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { incomeCertficate3yearOrForm16 })
    .then((data) => {
      res.status(200).json({
        message: "income Certficate 3year Or Form 16 updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.castProof =async (req, res) => {
  let castProof;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
     castProof=Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { castProof })
    .then((data) => {
      res.status(200).json({
        message: "castProof updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.selfDeclearation =async (req, res) => {
  let selfDeclearation;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    selfDeclearation =Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { selfDeclearation })
    .then((data) => {
      res.status(200).json({
        message: "selfDeclearation updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.acknowledgmentDocument = async(req, res) => {
  let acknowledgmentDocument;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    acknowledgmentDocument =Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { acknowledgmentDocument })
    .then((data) => {
      res.status(200).json({
        message: "acknowledgmentDocument updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.finalDocument = async(req, res) => {
  let finalDocument;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    finalDocument =Location;
  }
  Ews
    .findOneAndUpdate({ _id: req.params.id }, { finalDocument })
    .then((data) => {
      res.status(200).json({
        message: "finalDocument updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.deleteEws = (req, res) => {
  Ews.findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

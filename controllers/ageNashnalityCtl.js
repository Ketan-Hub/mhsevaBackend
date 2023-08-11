const ageNashnality = require("../model/Age_NashnalityMdl");
const uploadToS3 = require('../validator/midalware');

exports.createageNashnality = async (req, res) => {
  const { 
    retailerName,
    application_type,
    status,
    createdBy,
    createdByName,
    Data:{
    docName,
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    BirthDate,
    age,
    Gender,
    work_type,
    phoneNUm,
    email,
    AdharNo,
    Building,
    address,
    street,
    // depart,
    landmark,
    district,
    taluka,
    village,
    pincode,
    onAddressLiveing,
    currentlivingInyear,
    Applicunt_Live_In_MH_Inyear,
    applicant_Name,
    benificiary_NameStatus,
    relationApplicant_beneficiary,
    benificiary_Name,
    benificiary_DOB,
    Benificiary_Phoneno,
    // BirthDetails,
    BirthDetails_address,
    BirthDetails_strateName,
    BirthDetails_Building,
    BirthDetails_depart,
    BirthDetails_Country,
    BirthDetails_district,
    BirthDetails_tehsil,
    BirthDetails_village,
    BirthDetails_pincode,
    migration_MH_From_Another_State,
    // isMovablePropartyOfApp_FAther_Hus,
    Proparty_address,
    Proparty_street,
    Proparty_Building,
    Proparty_locality,
    Proparty_Country,
    Proparty_State,
    Proparty_district,
    Proparty_Tehsil,
    Proparty_village,
    Proparty_pincode,
    Benificiary_propartyHolder_Relation,
    Benificiary_propartyDetails,
    Benificiary_Father_HusRecidance,
    Benificiary_FatherRecidaceOfBirth,
    isBenificiary_FatherRecidaceOfBirth_outOf_MH,
    placeOfEmploment,
    isApllicantBenificiaryOtherState,
    ApllicantBenificiaryOtherState,
    ApllicantBenificiaryOtherState_district,
    ApllicantBenificiaryOtherState_Taluka,
    ApllicantBenificiaryOtherState_Village,
    ApllicantBenificiaryOtherState_pincode,
    CertificateReason
    },
    EducationDetailsArray,
    MigrationBeneficiaryArray,
    FMemberBeneficiaryArray,
    rejNote,
    subNote,
    compNote,
    reshanCard ,
   adharCard ,
   lightBill ,
   schoolLeaveCertificate ,
   taxBillOr15yerOldLightbill ,
   photo ,
   selfDeclaration,

} = req.body;
  const AgeNashnality = new ageNashnality({
    retailerName,
    application_type,
    status,
    createdBy,
    createdByName,
    Data:{
    docName,
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    BirthDate,
    age,
    Gender,
    work_type,
    phoneNUm,
    email,
    AdharNo,
    Building,
    address,
    street,
    // depart,
    landmark,
    district,
    taluka,
    village,
    pincode,
    onAddressLiveing,
    currentlivingInyear,
    Applicunt_Live_In_MH_Inyear,
    applicant_Name,
    benificiary_NameStatus,
    relationApplicant_beneficiary,
    benificiary_Name,
    benificiary_DOB,
    Benificiary_Phoneno,
    rejNote,
    subNote,
    compNote,
    // BirthDetails,
    BirthDetails_address,
    BirthDetails_strateName,
    BirthDetails_Building,
    BirthDetails_depart,
    BirthDetails_Country,
    BirthDetails_district,
    BirthDetails_tehsil,
    BirthDetails_village,
    BirthDetails_pincode,
    migration_MH_From_Another_State,
    // isMovablePropartyOfApp_FAther_Hus,
    Proparty_address,
    Proparty_street,
    Proparty_Building,
    Proparty_locality,
    Proparty_Country,
    Proparty_State,
    Proparty_district,
    Proparty_Tehsil,
    Proparty_village,
    Proparty_pincode,
    Benificiary_propartyHolder_Relation,
    Benificiary_propartyDetails,
    Benificiary_Father_HusRecidance,
    Benificiary_FatherRecidaceOfBirth,
    isBenificiary_FatherRecidaceOfBirth_outOf_MH,
    placeOfEmploment,
    isApllicantBenificiaryOtherState,
    ApllicantBenificiaryOtherState,
    ApllicantBenificiaryOtherState_district,
    ApllicantBenificiaryOtherState_Taluka,
    ApllicantBenificiaryOtherState_Village,
    ApllicantBenificiaryOtherState_pincode,
    CertificateReason,
    },
    EducationDetailsArray,
    MigrationBeneficiaryArray,
    FMemberBeneficiaryArray,
    reshanCard ,
    adharCard ,
    lightBill ,
    schoolLeaveCertificate,
    taxBillOr15yerOldLightbill ,
    photo ,
    selfDeclaration,
})

AgeNashnality.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
        console.log("ok",error);
      res.status(400).json({ error: error.message });
    });
};

exports.getageNashnality= async (req, res) => {
  console.log(res);
  try {
    const data = await ageNashnality.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingageNashnality = async (req, res) => {
  try {
    const singData = await ageNashnality.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateageNashnality= (req, res) => {
    ageNashnality
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.reshanCard = async(req, res) => {
  let reshanCard;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    reshanCard =Location;
  }
  ageNashnality
    .findOneAndUpdate({ _id: req.params.id }, { reshanCard })
    .then((data) => {
      res.status(200).json({
        message: "reshanCard updated successfully",
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
  ageNashnality
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
exports.lightBill =async (req, res) => {
  let lightBill;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    lightBill =Location;
  }

  ageNashnality
    .findOneAndUpdate({ _id: req.params.id }, { lightBill })
    .then((data) => {
      res.status(200).json({
        message: "lightBill updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.schoolLeaveCertificate = async(req, res) => {
  let schoolLeaveCertificate;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    schoolLeaveCertificate =Location;
  }
  ageNashnality
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
exports.taxBillOr15yerOldLightbill = async(req, res) => {
  let taxBillOr15yerOldLightbill;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    taxBillOr15yerOldLightbill =Location;
  }
  ageNashnality
    .findOneAndUpdate({ _id: req.params.id }, { taxBillOr15yerOldLightbill })
    .then((data) => {
      res.status(200).json({
        message: "tax Bill Or 15 year Old Lightbill updated successfully",
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
  ageNashnality
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
exports.selfDeclaration = async(req, res) => {
  let selfDeclaration;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    selfDeclaration =Location;
  }
  ageNashnality
    .findOneAndUpdate({ _id: req.params.id }, { selfDeclaration })
    .then((data) => {
      res.status(200).json({
        message: "selfDeclaration updated successfully",
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
  ageNashnality
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
  ageNashnality
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

exports.deletageNashnality = (req, res) => {
    ageNashnality
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

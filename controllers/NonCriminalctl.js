const NonCriminal = require("../model/nonCrinalMdl");
const uploadToS3 = require('../validator/midalware');

exports.createNonCriminal = async (req, res) => {
  const { 
    application_type,
    status,
    createdBy,
    createdByName,
    Data:{
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    incoCerYear,
    BirthDate,
    age,
    Gender,
    phoneNUm,
    email,
    UDI_NO,

    Applicant_address,
    Applicant_street,
    Applicant_Locality,
    Applicant_Building,
    Applicant_landmark,
    Applicant_district,
    Applicant_taluka,
    Applicant_village,
    Applicant_pincode,
    Applicant_CurrentOccupation,
    relationOfBanificiaryWithApplicant,
    benificiary_Cast,
    benificiary_Catagary,
    brnificiary_Validity_Duration,
    migration_MH_From_Another_State,
    Migrant_Distict,
    Migrant_Taluka,
    Migrant_village,
    isAppliedForCastCertificate,
    is_Certificate_Given,
    previos_CastCerNum,
    previos_CastCerPlaceIssue,
    previos_CastCerIssuedDate,
    propowner,
    txtLocation,
    txtarea,
    ddlareaunits,
    checkbox,
    txtirriarea,
    ddlunits,
    txtpercentage,
    txtformula,
    txtceilingactform,
    ddlcultitype,
    txtcultilocation,
    txtcultiarea,
    ddlcultiunit,
    txtproploc,
    txtpropdetails,
    txtpropuse,
    CPH_radiobtnpayee,
    radiobtnwealthtax,
    ddlmothersal,
    txtmothername,
    txtmothername_LL,
    ddlspousesal,
    txtSpouseName,
    txtspousename_LL,
    ddlfam_dist,
    ddlfam_Vill,
    txtfam_pincode,
    txtbenefreason,
    ctl00$CPH$Affd
    },
    NonCreamyLayerincomeSource,
    occupation_income ,


} = req.body;
  const nonCriminal = new NonCriminal({
    application_type,
    status,
    createdBy,
    createdByName,
    Data:{
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    incoCerYear,
    BirthDate,
    age,
    Gender,
    phoneNUm,
    email,
    UDI_NO,

    Applicant_address,
    Applicant_street,
    Applicant_Locality,
    Applicant_Building,
    Applicant_landmark,
    Applicant_district,
    Applicant_taluka,
    Applicant_village,
    Applicant_pincode,
    Applicant_CurrentOccupation,
    relationOfBanificiaryWithApplicant,
    benificiary_Cast,
    benificiary_Catagary,
    brnificiary_Validity_Duration,
    migration_MH_From_Another_State,
    Migrant_Distict,
    Migrant_Taluka,
    Migrant_village,
    isAppliedForCastCertificate,
    is_Certificate_Given,
    previos_CastCerNum,
    previos_CastCerPlaceIssue,
    previos_CastCerIssuedDate,
    propowner,
    txtLocation,
    txtarea,
    ddlareaunits,
    checkbox,
    txtirriarea,
    ddlunits,
    txtpercentage,
    txtformula,
    txtceilingactform,
    ddlcultitype,
    txtcultilocation,
    txtcultiarea,
    ddlcultiunit,
    txtproploc,
    txtpropdetails,
    txtpropuse,
    CPH_radiobtnpayee,
    radiobtnwealthtax,
    ddlmothersal,
    txtmothername,
    txtmothername_LL,
    ddlspousesal,
    txtSpouseName,
    txtspousename_LL,
    ddlfam_dist,
    ddlfam_Vill,
    txtfam_pincode,
    txtbenefreason,
    ctl00$CPH$Affd
    },
    NonCreamyLayerincomeSource,
    occupation_income 
    
})

nonCriminal.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
        // console.log(err)
      res.status(400).json({ error: error.message });
    });
};

exports.getNonCriminal= async (req, res) => {
  console.log(res);
  try {
    const data = await NonCriminal.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingNonCriminal = async (req, res) => {
  try {
    const singData = await NonCriminal.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateNonCriminal= (req, res) => {
    NonCriminal
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};





exports.reshaCard =async (req, res) => {
  let reshaCard;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    reshaCard =Location;
  }
  NonCriminal
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
  NonCriminal
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
  NonCriminal
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
exports.schoolLeaveCertificate = async(req, res) => {
  let schoolLeaveCertificate;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    schoolLeaveCertificate =Location;
  }
  NonCriminal
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
  NonCriminal
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
exports.incomeCertficate3year = async(req, res) => {
  let incomeCertficate3year;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    incomeCertficate3year =Location;
  }
  NonCriminal
    .findOneAndUpdate({ _id: req.params.id }, { incomeCertficate3year })
    .then((data) => {
      res.status(200).json({
        message: "income Certficate 3year updated successfully",
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
    castProof =Location;
  }
  NonCriminal
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
exports.taxRecipt = async(req, res) => {
  let taxRecipt;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    taxRecipt =Location;
  }
  NonCriminal
    .findOneAndUpdate({ _id: req.params.id }, { taxRecipt })
    .then((data) => {
      res.status(200).json({
        message: "taxRecipt updated successfully",
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
  NonCriminal
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
  NonCriminal
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

exports.deletNonCriminal = (req, res) => {
    NonCriminal
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

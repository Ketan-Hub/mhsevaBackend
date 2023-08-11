const passport = require("../model/passportmdl");
const uploadToS3 = require('../validator/midalware');

exports.createpassport = async (req, res) => {
  const {
    application_type,
    status,
    createdBy,
    createdByName,
    typeApplication,
    typePassport,
    title,
    firstName,
    middleName,
    lastName,
    mobileNumber,
    email,
    gender,
    Dob,
    pob,
    maritalStatus,
    father_firstName,
    father_middleName,
    father_lastName,
    mother_firstName,
    mother_middleName,
    mother_lastName,
    spouse_firstName,
    spouse_middleName,
    spouse_lastName,
    presentAddress,
    permanantAdress_as_presentAdress,
    permanantAdress,
    preferred_policeStation,
    isYourParents_governmentServant,
    educationQualification,
    employmentType,
    appliedPassport,
    EmergencyContact_FirstName,
    EmergencyContact_middleName,
    EmergencyContact_lastName,
    EmergencyContact_mobileNO,
    EmergencyAddress,
    rejNote,
    subNote,
    compNote,
    zipAllDocuments
  } = req.body;
  const Passport = new passport({
    application_type,
    status,
    createdBy,
    createdByName,
    typeApplication,
    typePassport,
    title,
    firstName,
    middleName,
    lastName,
    mobileNumber,
    email,
    gender,
    Dob,
    pob,
    maritalStatus,
    father_firstName,
    father_middleName,
    father_lastName,
    mother_firstName,
    mother_middleName,
    mother_lastName,
    spouse_firstName,
    spouse_middleName,
    spouse_lastName,
    presentAddress,
    permanantAdress_as_presentAdress,
    permanantAdress,
    preferred_policeStation,
    isYourParents_governmentServant,
    educationQualification,
    employmentType,
    appliedPassport,
    EmergencyContact_FirstName,
    EmergencyContact_middleName,
    EmergencyContact_lastName,
    EmergencyContact_mobileNO,
    EmergencyAddress,
    rejNote,
    subNote,
    compNote,
    zipAllDocuments
  });

  Passport.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getpassport = async (req, res) => {
  console.log(res);
  try {
    const data = await passport.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingpassport = async (req, res) => {
  try {
    const singData = await passport.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updatepassport = (req, res) => {
  passport
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
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
  passport
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
  passport
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
exports.zipAllDocuments = async(req, res) => {
  let zipAllDocuments;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    zipAllDocuments =Location;
  }
  passport
    .findOneAndUpdate({ _id: req.params.id }, { zipAllDocuments })
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
exports.deletepassport = (req, res) => {
  passport
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const passport = require("../model/passportmdl");

exports.createpassport = async (req, res) => {
  const {
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
    zipAllDocuments
  } = req.body;
  const Passport = new passport({
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

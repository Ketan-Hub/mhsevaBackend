const learningDl = require("../model/learningDl");
const { param } = require("../routes/learnning");

// Create a new Address's

exports.createLearningDl = async (req, res) => {
  const {
    state,
    rto,
    vehical_type,
    application_first_name,
    application_middle_name,
    application_last_name,
    relation,
    fullname_asper_record,
    gender,
    Dob,
    pob,
    cob,
    qualification,
    blood_group,
    mobile_No,
    email,
    identification_mark1,
    identification_mark2,
    emergency_mobNo,
    present_Address_State,
    present_Address_Distict,
    present_Address_tehsil,
    Present_Address_Village,
    Present_Address_Line_1,
    Present_Address_Line_2,
    present_Adderess_PinCode,
    present_Address_Same_AS_Premant_Address,
    permanent_Address_State,
    permanent_Address_Distict,
    permanent_Address_tehsil,
    permanent_Address_Village,
    permanent_Address_Line_1,
    permanent_Address_Line_2,
    permanent_Adderess_PinCode,
    addressProof,
    ageProof,
    passportSize,
    signature,
  } = req.body;
let PASAPA =present_Address_Same_AS_Premant_Address =="No"? false: true
  console.log(req.body)
  console.log(req.file)
  const LearningDl = new learningDl({
    state,
    rto,
    vehical_type,
    application_first_name,
    application_middle_name,
    application_last_name,
    relation,
    fullname_asper_record,
    gender,
    Dob,
    pob,
    cob,
    qualification,
    blood_group,
    mobile_No,
    email,
    identification_mark1,
    identification_mark2,
    emergency_mobNo,
    present_Address_State,
    present_Address_Distict,
    present_Address_tehsil,
    Present_Address_Village,
    Present_Address_Line_1,
    Present_Address_Line_2,
    present_Adderess_PinCode,
    present_Address_Same_AS_Premant_Address:PASAPA,
    permanent_Address_State,
    permanent_Address_Distict,
    permanent_Address_tehsil,
    permanent_Address_Village,
    permanent_Address_Line_1,
    permanent_Address_Line_2,
    permanent_Adderess_PinCode,
    addressProof,
    ageProof,
    passportSize,
    signature,
    ApllicationType:"LearningDl"
  });

  LearningDl
    .save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};



exports.getlearnningDl = async (req, res) => {
  console.log(res);
  try {
    const getusers = await learningDl.find();
    res.json(getusers);
  } catch {
    (err) => res.json(err);
  }
};


exports.getSingleLearnningDl = async (req, res) => {
  try {
    const user = await learningDl.find({ _id: req.params.id });
    res.json(user);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateLearningDl = (req, res) => {
  learningDl
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.updateAdharDl = (req, res) => {
  let addressProof;
  console.log(req.body);
  console.log(req.file);
  if (req.file) {

    addressProof = req.file.filename;
  }
  console.log(139,addressProof)

  learningDl
    .findOneAndUpdate({ _id: req.params.id }, { addressProof },{ new: true })
    .then((data) => {
      res.status(200).json({
        message: "Address proof updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.updateAgeProofDl = (req, res) => {
  let ageProof;
  if (req.file) {
    ageProof = req.file.filename;
  }
  learningDl
    .findOneAndUpdate({ _id: req.params.id }, { ageProof },{ new: true })
    .then((data) => {
      res.status(200).json({
        message: "Age proof updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.updatepassportSize = (req, res) => {
  let passportSize;
  if (req.file) {
    passportSize = req.file.filename;
  }
  learningDl
    .findOneAndUpdate({ _id: req.params.id }, { passportSize },{ new: true })
    .then((data) => {
      res.status(200).json({
        message: "passport photo updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.Uploadsignature = (req, res) => {
  let signature;
  if (req.file) {
    signature = req.file.filename;
  }
  learningDl
    .findOneAndUpdate({ _id: req.params.id }, { signature },{ new: true })
    .then((data) => {
      res.status(200).json({
        message: "passport photo updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// Delete Address by ID
exports.deletelearnningDl = (req, res) => {
  learningDl
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

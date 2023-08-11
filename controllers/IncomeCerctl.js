const incomeCer = require("../model/income_certificatemdl");
const uploadToS3 = require('../validator/midalware');

exports.createIncomeCer = async (req, res) => {
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
    work_type,
    phoneNUm,
    email,
    PanNo,
    AdharNo,
    address,
    streetName,
    depart,
    Building,
    landmark,
    district,
    taluka,
    village,
    pincode,
   
    relationOfApplicant,
    statusOfApplicant,
    NameOfApplicant,
    ReasonOfApllication,
    ReasonOfincome_get,
    IncomeDOcsName
  },
    family,
    distibutionOfIncomefromAgri,
    incomeSource,
    rejNote,
    subNote,
    compNote,


} = req.body;
  const IncomeCer = new incomeCer({
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
    work_type,
    phoneNUm,
    email,
    PanNo,
    AdharNo,
    address,
    streetName,
    depart,
    Building,
    landmark,
    district,
    taluka,
    village,
    pincode,
    relationOfApplicant,
    statusOfApplicant,
    NameOfApplicant,
    ReasonOfApllication,
    ReasonOfincome_get,
    IncomeDOcsName
  },
  family,
  distibutionOfIncomefromAgri,
  incomeSource,
  rejNote,
  subNote,
  compNote,
   
  
})

IncomeCer.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
        // console.log(err)
      res.status(400).json({ error: error.message });
    });
};

exports.getincomeCer= async (req, res) => {
  console.log(res);
  try {
    const data = await incomeCer.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingincomeCer = async (req, res) => {
  try {
    const singData = await incomeCer.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateincomeCer= (req, res) => {
    incomeCer
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

//incomeCer API's
exports.reshaCard = async(req, res) => {
  let reshaCard;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    reshaCard =Location;
  }
  incomeCer
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
  incomeCer
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
  incomeCer
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
exports.photo = async(req, res) => {
  let photo;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    photo =Location;
  }
  incomeCer
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

exports.form16 = async(req, res) => {
  let form16;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    form16 =Location;
  }
  incomeCer
    .findOneAndUpdate({ _id: req.params.id }, { form16 })
    .then((data) => {
      res.status(200).json({
        message: "form16 updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.consentform = async(req, res) => {
  let consentform;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    consentform =Location;
  }
  incomeCer
    .findOneAndUpdate({ _id: req.params.id }, { consentform })
    .then((data) => {
      res.status(200).json({
        message: "consentform updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.selfDeclearation = async(req, res) => {
  let selfDeclearation;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    selfDeclearation =Location;
  }
  incomeCer
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
  incomeCer
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
  incomeCer
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
exports.deletincomeCer = (req, res) => {
    incomeCer
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

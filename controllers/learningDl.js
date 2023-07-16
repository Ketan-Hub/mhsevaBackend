const learningDl = require("../model/learningDl");
// const { param, uploadToS3 } = require("../routes/learnning");
const  AWS= require( 'aws-sdk');
const awsConfig = {
    region: "ap-south-1",
    accessKeyId: "AKIAZP55XADYWS3FEBHX",
    secretAccessKey: "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",
  };
const S3Bucket = new AWS.S3(awsConfig);
 const uploadToS3 = (fileData) => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: 'mhaeseva',
            Key: `${Date.now().toString()}.jpg`,
            Body: fileData,
        };
        S3Bucket.upload(params, (err, data) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            return resolve(data);
        });
    });
  };
// Create a new Address's

exports.createLearningDl = async (req, res) => {
  const {
    createdById,
    createdByName,
    status,
    application_type,
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
  let PASAPA = present_Address_Same_AS_Premant_Address == "No" ? false : true;
  console.log(52,req.body);
  // console.log(req.file);
  const LearningDl = new learningDl({
    createdById,
    createdByName,
    application_type,
    status,
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
    present_Address_Same_AS_Premant_Address: PASAPA,
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
    ApllicationType: "LearningDl",
  });

  LearningDl.save()
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
exports.updateAdharDl = async(req, res) => {
  let addressProof;
  console.log(req.body);
  console.log(req.file);
  // if (req.file) {
  //   addressProof = req.file.filename;
  // }
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    addressProof =Location;
  }

  learningDl
    .findOneAndUpdate({ _id: req.params.id }, { addressProof }, { new: true })
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
exports.updateAgeProofDl = async(req, res) => {
  let ageProof;
  // if (req.file) {
  //   ageProof = req.file.filename;
  // }
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    ageProof =Location;
  }
  learningDl
    .findOneAndUpdate({ _id: req.params.id }, { ageProof }, { new: true })
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
exports.updatepassportSize = async(req, res) => {
  let passportSize;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    passportSize =Location;
  }
  learningDl
    .findOneAndUpdate({ _id: req.params.id }, { passportSize }, { new: true })
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
exports.Uploadsignature = async (req, res) => {
  let signature;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    signature =Location;
  }
  learningDl
    .findOneAndUpdate({ _id: req.params.id }, { signature }, { new: true })
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
exports.acknowledgmentDocument = async(req, res) => {
  let acknowledgmentDocument;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    acknowledgmentDocument =Location;
  }
  learningDl
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
  learningDl
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

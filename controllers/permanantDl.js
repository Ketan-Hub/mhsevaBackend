const permanantDl = require("../model/permanantDl");
const uploadToS3 = require('../validator/midalware');

exports.createPermanntDl = async (req, res) => {
  const {
    state,
    rto,
    vehical_type,
    learningLicenceNo,
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
  } = req.body;
  const PermanantDl = new permanantDl({
    state,
    rto,
    vehical_type,
    learningLicenceNo,
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
    // addressProof,
    // ageProof,
  });

//   permanant.save((error, permanant) => {
//     if (error) return res.status(400).json({ error });
//     if (permanant) {
//       res.status(201).json({ permanant });
//     }
//   });
// };
PermanantDl.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.getpermanantDl = async (req, res) => {
    console.log(res);
    try {
      const getusers = await permanantDl.find();
      res.json(getusers);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSingpermanantDl = async (req, res) => {
    try {
      const user = await permanantDl.find({ _id: req.params.id });
      res.json(user);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updatepermanantDl = (req, res) => {
    permanantDl.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.updateAdharDl =async (req, res) => {
    let addressProof;
    // if (req.file) {
    //   addressProof = req.file.filename;
    // }
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      addressProof =Location;
    }
    permanantDl
      .findOneAndUpdate({ _id: req.params.id }, { addressProof })
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
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      ageProof =Location;
    }
    permanantDl
      .findOneAndUpdate({ _id: req.params.id }, { ageProof })
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
  exports.acknowledgmentDocument = async(req, res) => {
    let acknowledgmentDocument;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      acknowledgmentDocument =Location;
    }
    permanantDl
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
    permanantDl
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
  exports.deletepermanantDl = (req, res) => {
    permanantDl.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };
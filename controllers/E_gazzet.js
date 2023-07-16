const e_gazzet = require("../model/e_gazzet");
const uploadToS3 = require('../validator/midalware');

exports.createE_gazzet = async (req, res) => {
  const {
    retailerName,
    service_type,
    type_cast,
    title,
    firstName,
    middleName,
    lastName,
    mobileNumber,
    email,
    adharNumber,
    mobileNumber_registered_with_adharCard,
    gender,
    Dob,
    Old_Dob,
    New_Dob,
    OldName,
    NewName,
    reason,
    address,
    photoID,
    addressProof,
    applicationForm,
    identityProof,
    Passport_Size_Photo,
    OldName_Proof,
    PresentName_Proof,
    Cast_Certificate,
   
  } = req.body;
  const E_gazzet = new e_gazzet({
    service_type,
    type_cast,
    title,
    firstName,
    middleName,
    lastName,
    mobileNumber,
    email,
    adharNumber,
    mobileNumber_registered_with_adharCard,
    gender,
    Dob,
    Old_Dob,
    New_Dob,
    OldName,
    NewName,
    reason,
    address,
    photoID,
    addressProof,
    applicationForm,
    identityProof,
    Passport_Size_Photo,
    OldName_Proof,
    PresentName_Proof,
    Cast_Certificate,
  });


  E_gazzet.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.gete_gazzet = async (req, res) => {
    console.log(res);
    try {
      const getusers = await e_gazzet.find();
      res.json(getusers);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSinge_gazzet = async (req, res) => {
    try {
      const user = await e_gazzet.find({ user: req.params.id });
      res.json(user);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updatee_gazzet = (req, res) => {
    e_gazzet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.photoID = async(req, res) => {
    let photoID;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      photoID =Location;
    }
    e_gazzet
      .findOneAndUpdate({ _id: req.params.id }, { photoID })
      .then((data) => {
        res.status(200).json({
          message: "photo ID updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.addressProof = async(req, res) => {
    let addressProof;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      addressProof =Location;
    }
    e_gazzet
      .findOneAndUpdate({ _id: req.params.id }, { addressProof })
      .then((data) => {
        res.status(200).json({
          message: "photo ID updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.applicationForm = async(req, res) => {
    let applicationForm;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      applicationForm =Location;
    }
    e_gazzet
      .findOneAndUpdate({ _id: req.params.id }, { applicationForm })
      .then((data) => {
        res.status(200).json({
          message: "photo ID updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.identityProof = async(req, res) => {
    let identityProof;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      identityProof =Location;
    }
    e_gazzet
      .findOneAndUpdate({ _id: req.params.id }, { identityProof })
      .then((data) => {
        res.status(200).json({
          message: "identity Proof updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.Passport_Size_Photo =async (req, res) => {
    let Passport_Size_Photo;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      Passport_Size_Photo =Location;
    }
    e_gazzet
      .findOneAndUpdate({ _id: req.params.id }, { Passport_Size_Photo })
      .then((data) => {
        res.status(200).json({
          message: "identity Proof updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.OldName_Proof = async(req, res) => {
    let OldName_Proof;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      OldName_Proof =Location;
    }
    e_gazzet
      .findOneAndUpdate({ _id: req.params.id }, { OldName_Proof })
      .then((data) => {
        res.status(200).json({
          message: "identity Proof updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.PresentName_Proof = async(req, res) => {
    let PresentName_Proof;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      PresentName_Proof =Location;
    }
    e_gazzet
      .findOneAndUpdate({ _id: req.params.id }, { PresentName_Proof })
      .then((data) => {
        res.status(200).json({
          message: "identity Proof updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.Cast_Certificate =async (req, res) => {
    let Cast_Certificate;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      Cast_Certificate =Location;
    }
    e_gazzet
      .findOneAndUpdate({ _id: req.params.id }, { Cast_Certificate })
      .then((data) => {
        res.status(200).json({
          message: "identity Proof updated successfully",
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
    e_gazzet
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
    e_gazzet
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


  exports.deletee_gazzet = (req, res) => {
    e_gazzet.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };
const e_gazzet = require("../model/e_gazzet");

exports.createE_gazzet = async (req, res) => {
  const {
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
  exports.photoID = (req, res) => {
    let photoID;
    if (req.file) {
      photoID = req.file.filename;
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
  exports.addressProof = (req, res) => {
    let addressProof;
    if (req.file) {
      addressProof = req.file.filename;
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
  exports.applicationForm = (req, res) => {
    let applicationForm;
    if (req.file) {
      applicationForm = req.file.filename;
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
  exports.identityProof = (req, res) => {
    let identityProof;
    if (req.file) {
      identityProof = req.file.filename;
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
  exports.Passport_Size_Photo = (req, res) => {
    let Passport_Size_Photo;
    if (req.file) {
      Passport_Size_Photo = req.file.filename;
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
  exports.OldName_Proof = (req, res) => {
    let OldName_Proof;
    if (req.file) {
      OldName_Proof = req.file.filename;
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
  exports.PresentName_Proof = (req, res) => {
    let PresentName_Proof;
    if (req.file) {
      PresentName_Proof = req.file.filename;
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
  exports.Cast_Certificate = (req, res) => {
    let Cast_Certificate;
    if (req.file) {
      Cast_Certificate = req.file.filename;
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


  exports.deletee_gazzet = (req, res) => {
    e_gazzet.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };
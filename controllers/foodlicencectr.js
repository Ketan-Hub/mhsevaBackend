const foodlicence = require("../model/foodLicencemdl");
const uploadToS3 = require('../validator/midalware');

exports.createfoodlicence = async (req, res) => {
  const {
    application_type,
    status,
    createdBy,
    createdByName,
    retailerName,
    no_OF_years,
    title,
    firstName,
    middleName,
    lastName,
    mobileNO,
    email,
    businessName,
    shopAddess,
    natureBusiness,
    adharCard_businessOwner,
    passportSize_Photo_businessOwner,
    declaration_businessOwner,
    affidavitFrom_businessOwner,
    electricBill_businessPlace,
    rentAgreement,
    rejNote,
    subNote,
    compNote,

   
  } = req.body;
  const Foodlicence = new foodlicence({
    application_type,
    status,
    createdBy,
    createdByName,
    retailerName,
    no_OF_years,
    title,
    firstName,
    middleName,
    lastName,
    mobileNO,
    email,
    businessName,
    shopAddess,
    natureBusiness,
    adharCard_businessOwner,
    passportSize_Photo_businessOwner,
    declaration_businessOwner,
    affidavitFrom_businessOwner,
    electricBill_businessPlace,
    rentAgreement,
    rejNote,
    subNote,
    compNote,
  });


  Foodlicence.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.getfoodlicence = async (req, res) => {
    console.log(res);
    try {
      const getusers = await foodlicence.find();
      res.json(getusers);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSingfoodlicence = async (req, res) => {
    try {
      const flicence = await foodlicence.find({ _id: req.params.id });
      res.json(flicence);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updatefoodlicence = (req, res) => {
    foodlicence.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.adharCard_businessOwner =async(req, res) => {
    let adharCard_businessOwner;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      adharCard_businessOwner =Location;
    }
    foodlicence
      .findOneAndUpdate({ _id: req.params.id }, { adharCard_businessOwner })
      .then((data) => {
        res.status(200).json({
          message: "adharCard businessOwner  updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.passportSize_Photo_businessOwner =async (req, res) => {
    let passportSize_Photo_businessOwner;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      passportSize_Photo_businessOwner =Location;
    }
    foodlicence
      .findOneAndUpdate({ _id: req.params.id }, { passportSize_Photo_businessOwner })
      .then((data) => {
        res.status(200).json({
          message: "passportSize Photo businessOwner  updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.declaration_businessOwner = async(req, res) => {
    let declaration_businessOwner;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      declaration_businessOwner =Location;
    }
    foodlicence
      .findOneAndUpdate({ _id: req.params.id }, { declaration_businessOwner })
      .then((data) => {
        res.status(200).json({
          message: "declaration businessOwner updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.affidavitFrom_businessOwner = async(req, res) => {
    let affidavitFrom_businessOwner;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      affidavitFrom_businessOwner =Location;
    }
    foodlicence
      .findOneAndUpdate({ _id: req.params.id }, { affidavitFrom_businessOwner })
      .then((data) => {
        res.status(200).json({
          message: "affidavitFrom businessOwner updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.electricBill_businessPlace =async(req, res) => {
    let electricBill_businessPlace;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      electricBill_businessPlace =Location;
    }
    foodlicence
      .findOneAndUpdate({ _id: req.params.id }, { electricBill_businessPlace })
      .then((data) => {
        res.status(200).json({
          message: "electricBill businessPlace updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.rentAgreement = async(req, res) => {
    let rentAgreement;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      rentAgreement =Location;
    }
    foodlicence
      .findOneAndUpdate({ _id: req.params.id }, { rentAgreement })
      .then((data) => {
        res.status(200).json({
          message: "electricBill businessPlace updated successfully",
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
    foodlicence
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
    foodlicence
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
  exports.deletefoodlicence = (req, res) => {
    foodlicence.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };

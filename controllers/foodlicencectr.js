const foodlicence = require("../model/foodLicencemdl");

exports.createfoodlicence = async (req, res) => {
  const {
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
    rentAgreement

   
  } = req.body;
  const Foodlicence = new foodlicence({
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
    rentAgreement
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
  exports.adharCard_businessOwner = (req, res) => {
    let adharCard_businessOwner;
    if (req.file) {
      adharCard_businessOwner = req.file.filename;
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
  exports.passportSize_Photo_businessOwner = (req, res) => {
    let passportSize_Photo_businessOwner;
    if (req.file) {
      passportSize_Photo_businessOwner = req.file.filename;
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
  exports.declaration_businessOwner = (req, res) => {
    let declaration_businessOwner;
    if (req.file) {
      declaration_businessOwner = req.file.filename;
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
  exports.affidavitFrom_businessOwner = (req, res) => {
    let affidavitFrom_businessOwner;
    if (req.file) {
      affidavitFrom_businessOwner = req.file.filename;
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
  exports.electricBill_businessPlace = (req, res) => {
    let electricBill_businessPlace;
    if (req.file) {
      electricBill_businessPlace = req.file.filename;
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
  exports.rentAgreement = (req, res) => {
    let rentAgreement;
    if (req.file) {
      rentAgreement = req.file.filename;
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
  exports.deletefoodlicence = (req, res) => {
    foodlicence.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };

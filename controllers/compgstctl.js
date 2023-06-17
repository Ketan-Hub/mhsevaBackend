const cmpGST = require("../model/compgstmdl");

exports.createcmpGST = async (req, res) => {
  const {
    companyName,
    ownerName,
    mobileNO,
    email,
    businessStarted,
    companyAddress,
    companyPan,
    RegCertificate,
    MOA_AOA,
    authorityLetter,
    natureBusiness,
    adharCard,
    electricityBill,
    bankPassbook,
    panCard,
    passportPhoto,
    shopAct_licence,
    rentAgreement,
    signature

   
  } = req.body;
  const CmpGST = new cmpGST({
    companyName,
    ownerName,
    mobileNO,
    email,
    businessStarted,
    companyAddress,
    companyPan,
    RegCertificate,
    MOA_AOA,
    authorityLetter,
    natureBusiness,
    adharCard,
    electricityBill,
    bankPassbook,
    panCard,
    passportPhoto,
    shopAct_licence,
    rentAgreement,
    signature
  });


  CmpGST.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.getcmpGST = async (req, res) => {
    console.log(res);
    try {
      const getusers = await cmpGST.find();
      res.json(getusers);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSingcmpGST = async (req, res) => {
    try {
      const flicence = await cmpGST.find({ _id: req.params.id });
      res.json(flicence);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updatecmpGST = (req, res) => {
    cmpGST.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.adharCard = (req, res) => {
    let adharCard;
    if (req.file) {
      adharCard = req.file.filename;
    }
    cmpGST
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
  exports.electricityBill = (req, res) => {
    let electricityBill;
    if (req.file) {
      electricityBill = req.file.filename;
    }
    cmpGST
      .findOneAndUpdate({ _id: req.params.id }, { electricityBill })
      .then((data) => {
        res.status(200).json({
          message: "electricity Bill updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.bankPassbook = (req, res) => {
    let bankPassbook;
    if (req.file) {
      bankPassbook = req.file.filename;
    }
    cmpGST
      .findOneAndUpdate({ _id: req.params.id }, { bankPassbook })
      .then((data) => {
        res.status(200).json({
          message: "electricity Bill updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.panCard = (req, res) => {
    let panCard;
    if (req.file) {
      panCard = req.file.filename;
    }
    cmpGST
      .findOneAndUpdate({ _id: req.params.id }, { panCard })
      .then((data) => {
        res.status(200).json({
          message: "electricity Bill updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.passportPhoto = (req, res) => {
    let passportPhoto;
    if (req.file) {
      passportPhoto = req.file.filename;
    }
    cmpGST
      .findOneAndUpdate({ _id: req.params.id }, { passportPhoto })
      .then((data) => {
        res.status(200).json({
          message: "electricity Bill updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.shopAct_licence = (req, res) => {
    let shopAct_licence;
    if (req.file) {
      shopAct_licence = req.file.filename;
    }
    cmpGST
      .findOneAndUpdate({ _id: req.params.id }, { shopAct_licence })
      .then((data) => {
        res.status(200).json({
          message: "electricity Bill updated successfully",
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
    cmpGST
      .findOneAndUpdate({ _id: req.params.id }, { rentAgreement })
      .then((data) => {
        res.status(200).json({
          message: "electricity Bill updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.signature = (req, res) => {
    let signature;
    if (req.file) {
      signature = req.file.filename;
    }
    cmpGST
      .findOneAndUpdate({ _id: req.params.id }, { signature })
      .then((data) => {
        res.status(200).json({
          message: "electricity Bill updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.deletecmpGST = (req, res) => {
    cmpGST.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };

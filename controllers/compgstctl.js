const cmpGST = require("../model/compgstmdl");
const uploadToS3 = require('../validator/midalware');

exports.createcmpGST = async (req, res) => {
  const {
    
    application_type,
    status,
    createdBy,
    createdByName,
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
    signature,
    rejNote,
    subNote,
    compNote,

   
  } = req.body;
  const CmpGST = new cmpGST({
    application_type,
    status,
    createdBy,
    createdByName,
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
    signature,
    rejNote,
    subNote,
    compNote,
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
  exports.adharCard =async (req, res) => {
    let adharCard;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      adharCard =Location;
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
  exports.electricityBill =async (req, res) => {
    let electricityBill;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      electricityBill =Location;
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
  exports.bankPassbook = async(req, res) => {
    let bankPassbook;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      bankPassbook =Location;
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
  exports.panCard = async(req, res) => {
    let panCard;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      panCard =Location;
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
  exports.passportPhoto = async(req, res) => {
    let passportPhoto;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      passportPhoto =Location;
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
  exports.shopAct_licence = async(req, res) => {
    let shopAct_licence;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      schoolLeaveCertificate =Location;
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
  exports.rentAgreement = async(req, res) => {
    let rentAgreement;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      rentAgreement =Location;
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
  exports.signature =async (req, res) => {
    let signature;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      signature =Location;
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
  exports.acknowledgmentDocument = async(req, res) => {
    let acknowledgmentDocument;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      acknowledgmentDocument =Location;
    }
    cmpGST
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
    cmpGST
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
  exports.deletecmpGST = (req, res) => {
    cmpGST.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };

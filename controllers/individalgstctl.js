const indGST = require("../model/individualgstmdl");
const uploadToS3 = require('../validator/midalware');

exports.createindGST = async (req, res) => {
  const {
    application_type,
    status,
    createdBy,
    createdByName,
    customerName,
    address,
    mobileNO,
    email,
    panCard,
    adharCard,
    adharCard_Docs,
    electricityBill,
    bankPassbook,
    panCard_Docs,
    passportPhoto,
    shopAct_licence,
    rentAgreement,
    signature,
    rejNote,
    subNote,
    compNote,
   
  } = req.body;
  const IndGST = new indGST({
    application_type,
    status,
    createdBy,
    createdByName,
    customerName,
    address,
    mobileNO,
    email,
    panCard,
    adharCard,
    adharCard_Docs,
    electricityBill,
    bankPassbook,
    panCard_Docs,
    passportPhoto,
    shopAct_licence,
    rentAgreement,
    signature,
    rejNote,
    subNote,
    compNote,
  });


  IndGST.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.getindGST = async (req, res) => {
    console.log(res);
    try {
      const data = await indGST.find();
      res.json(data);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSingindGST = async (req, res) => {
    try {
      const singData = await indGST.find({ _id: req.params.id });
      res.json(singData);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updateindGST = (req, res) => {
    indGST.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.adharCard_Docs =async (req, res) => {
    let adharCard_Docs;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      adharCard_Docs =Location;
    }
    indGST
      .findOneAndUpdate({ _id: req.params.id }, { adharCard_Docs })
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
  exports.electricityBill = async(req, res) => {
    let electricityBill;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      electricityBill =Location;
    }
    indGST
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
  exports.bankPassbook =async (req, res) => {
    let bankPassbook;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      bankPassbook =Location;
    }
    indGST
      .findOneAndUpdate({ _id: req.params.id }, { bankPassbook })
      .then((data) => {
        res.status(200).json({
          message: "bankPassbook updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.panCard_Docs = async(req, res) => {
    let panCard_Docs;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      panCard_Docs =Location;
    }
    indGST
      .findOneAndUpdate({ _id: req.params.id }, { panCard_Docs })
      .then((data) => {
        res.status(200).json({
          message: "panCard_Docs updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.passportPhoto =async (req, res) => {
    let passportPhoto;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      passportPhoto =Location;
    }
    indGST
      .findOneAndUpdate({ _id: req.params.id }, { passportPhoto })
      .then((data) => {
        res.status(200).json({
          message: "passportPhoto updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.shopAct_licence =async (req, res) => {
    let shopAct_licence;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      shopAct_licence =Location;
    }
    indGST
      .findOneAndUpdate({ _id: req.params.id }, { shopAct_licence })
      .then((data) => {
        res.status(200).json({
          message: "passportPhoto updated successfully",
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
    indGST
      .findOneAndUpdate({ _id: req.params.id }, { rentAgreement })
      .then((data) => {
        res.status(200).json({
          message: "rentAgreement updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.signature = async(req, res) => {
    let signature;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      signature =Location;
    }
    indGST
      .findOneAndUpdate({ _id: req.params.id }, { signature })
      .then((data) => {
        res.status(200).json({
          message: "signature updated successfully",
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
    indGST
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
    indGST
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
  exports.deleteindGST = (req, res) => {
    indGST.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };

const indGST = require("../model/individualgstmdl");

exports.createindGST = async (req, res) => {
  const {
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
    signature
   
  } = req.body;
  const IndGST = new indGST({
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
    signature
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
  exports.adharCard_Docs = (req, res) => {
    let adharCard_Docs;
    if (req.file) {
      adharCard_Docs = req.file.filename;
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
  exports.electricityBill = (req, res) => {
    let electricityBill;
    if (req.file) {
      electricityBill = req.file.filename;
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
  exports.bankPassbook = (req, res) => {
    let bankPassbook;
    if (req.file) {
      bankPassbook = req.file.filename;
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
  exports.panCard_Docs = (req, res) => {
    let panCard_Docs;
    if (req.file) {
      panCard_Docs = req.file.filename;
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
  exports.passportPhoto = (req, res) => {
    let passportPhoto;
    if (req.file) {
      passportPhoto = req.file.filename;
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
  exports.shopAct_licence = (req, res) => {
    let shopAct_licence;
    if (req.file) {
      shopAct_licence = req.file.filename;
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
  exports.rentAgreement = (req, res) => {
    let rentAgreement;
    if (req.file) {
      rentAgreement = req.file.filename;
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
  exports.signature = (req, res) => {
    let signature;
    if (req.file) {
      signature = req.file.filename;
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


  exports.deleteindGST = (req, res) => {
    indGST.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };

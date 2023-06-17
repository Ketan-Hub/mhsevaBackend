const shopAct = require("../model/shopActMdl");

exports.createshopAct = async (req, res) => {
  const {
    selectType,
    title,
    firstName,
    middleName,
    lastName,
    mobileNo,
    email,
    adharNumber,
    mobileNumber_registered_WithAdharCard,
    gender,
    dob,
    residenceAddress_same_AadharAddress,
    residenceAddress,
    no_of_years_staying_in_residenceAddress,
    shopName,
    shopAddress_with_Pincode,
    IsShop_Rented,
    natureOfBusiness,
    dateBusiness_Started,
    number_of_Employees,
    number_of_MenEmployees,
    number_of_WomenEmployees,
    Partner1_Name,
    Partner1_mobileNumber,
    Partner1_email,
    Partner1_address,
    Partner2_Name,
    Partner2_mobileNumber,
    Partner2_email,
    Partner2_address,
    Partner3_Name,
    Partner3_mobileNumber,
    Partner3_email,
    Partner3_address,
    Partner4_Name,
    Partner4_mobileNumber,
    Partner4_email,
    Partner4_address,
    ownerPassport_photo,
    ownerSignatureAsPer_PAN,
    adharCard,
    shopPhotographFrom_FrontSide_WithBusinessBoard,
    selfDeclaration,
    ownerPANCard,
    oldShopAct_ForRenewal,
  } = req.body;
  const ShopAct = new shopAct({
    selectType,
    title,
    firstName,
    middleName,
    lastName,
    mobileNo,
    email,
    adharNumber,
    mobileNumber_registered_WithAdharCard,
    gender,
    dob,
    residenceAddress_same_AadharAddress,
    residenceAddress,
    no_of_years_staying_in_residenceAddress,
    shopName,
    shopAddress_with_Pincode,
    IsShop_Rented,
    natureOfBusiness,
    dateBusiness_Started,
    number_of_Employees,
    number_of_MenEmployees,
    number_of_WomenEmployees,
    Partner1_Name,
    Partner1_mobileNumber,
    Partner1_email,
    Partner1_address,
    Partner2_Name,
    Partner2_mobileNumber,
    Partner2_email,
    Partner2_address,
    Partner3_Name,
    Partner3_mobileNumber,
    Partner3_email,
    Partner3_address,
    Partner4_Name,
    Partner4_mobileNumber,
    Partner4_email,
    Partner4_address,
    ownerPassport_photo,
    ownerSignatureAsPer_PAN,
    adharCard,
    shopPhotographFrom_FrontSide_WithBusinessBoard,
    selfDeclaration,
    ownerPANCard,
    oldShopAct_ForRenewal,
  });

  ShopAct.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getshopAct = async (req, res) => {
  console.log(res);
  try {
    const getusers = await shopAct.find();
    res.json(getusers);
  } catch {
    (err) => res.json(err);
  }
};
exports.getsingleshopAct = async (req, res) => {
  try {
    const singlData = await shopAct.find({ _id: req.params.id });
    res.json(singlData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateshopAct = (req, res) => {
  shopAct
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.ownerPassport_photo = (req, res) => {
  let ownerPassport_photo;
  if (req.file) {
    ownerPassport_photo = req.file.filename;
  }
  shopAct
    .findOneAndUpdate({ _id: req.params.id }, { ownerPassport_photo })
    .then((data) => {
      res.status(200).json({
        message: "permanant Driving Licence updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.ownerSignatureAsPer_PAN = (req, res) => {
  let ownerSignatureAsPer_PAN;
  if (req.file) {
    ownerSignatureAsPer_PAN = req.file.filename;
  }
  shopAct
    .findOneAndUpdate({ _id: req.params.id }, { ownerSignatureAsPer_PAN })
    .then((data) => {
      res.status(200).json({
        message: "ownerSignatureAsPer_PAN Licence updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.adharCard = (req, res) => {
  let adharCard;
  if (req.file) {
    adharCard = req.file.filename;
  }
  shopAct
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
exports.shopPhotographFrom_FrontSide_WithBusinessBoard = (req, res) => {
  let shopPhotographFrom_FrontSide_WithBusinessBoard;
  if (req.file) {
    shopPhotographFrom_FrontSide_WithBusinessBoard = req.file.filename;
  }
  shopAct
    .findOneAndUpdate({ _id: req.params.id }, { shopPhotographFrom_FrontSide_WithBusinessBoard })
    .then((data) => {
      res.status(200).json({
        message: "shopPhotographFrom_FrontSide_WithBusinessBoard updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.selfDeclaration = (req, res) => {
  let selfDeclaration;
  if (req.file) {
    selfDeclaration = req.file.filename;
  }
  shopAct
    .findOneAndUpdate({ _id: req.params.id }, { selfDeclaration })
    .then((data) => {
      res.status(200).json({
        message: "selfDeclaration updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.ownerPANCard = (req, res) => {
  let ownerPANCard;
  if (req.file) {
    ownerPANCard = req.file.filename;
  }
  shopAct
    .findOneAndUpdate({ _id: req.params.id }, { ownerPANCard })
    .then((data) => {
      res.status(200).json({
        message: "ownerPANCard updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.oldShopAct_ForRenewal = (req, res) => {
  let oldShopAct_ForRenewal;
  if (req.file) {
    oldShopAct_ForRenewal = req.file.filename;
  }
  shopAct
    .findOneAndUpdate({ _id: req.params.id }, { oldShopAct_ForRenewal })
    .then((data) => {
      res.status(200).json({
        message: "oldShopAct_ForRenewal updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deleteshopAct = (req, res) => {
  shopAct
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const formPrice = require("../model/FormPriceMDL");

exports.createFormPrice = async (req, res) => {
  const { 
    userID,
    shopActNew,
    shopActReNew,
    udhamAbhar,
    companyGST,
    rentAgreement,
    individualGST,
    foodLicense1year,
    foodLicense2year,
    foodLicense3year,
    eGazette_OpenOBC,
    eGazette_SC,
    eGazette_SBC,
    eGazette_ST,
    eGazette_VJ,
    eGazette_NT,
    passport_Normal,
    passport_Tatkal,
    learningDl_MCWOG,
    learningDl_MCWG,
    learningDl_LMV,
    learningDl_LMV_TR,
    learningDl_MCWOG_MCWG,
    learningDl_MCWOG_LMV,
    learningDl_MCWG_LMV,
    learningDl_MCWOG_MCWG_LMV,
    learningDl_MCWG_LMVTR,
    learningDl_MCWOG_LMVTR,
    learningDl_MCWOG_MCWG_LMV_TR,
    permanent_MCWOG,
    permanent_MCWG,
    permanent_LMV,
    permanent_LMV_TR,
    permanent_MCWOG_MCWG,
    permanent_MCWOG_LMV,
    permanent_MCWG_LMV,
    permanent_MCWOG_MCWG_LMV,
    permanent_MCWG_LMVTR,
    permanent_MCWOG_LMVTR,
    permanent_MCWOG_MCWG_LMV_TR,
    renew_MCWOG,
    renew_MCWG,
    renew_LMV,
    renew_LMV_TR,
    renew_MCWOG_MCWG,
    renew_MCWOG_LMV,
    renew_MCWG_LMV,
    renew_MCWOG_MCWG_LMV,
    renew_MCWG_LMVTR,
    renew_MCWOG_LMVTR,
    renew_MCWOG_MCWG_LMV_TR,
    panCard,
    voterCard,

   } = req.body;
   console.log(req.body)
  const FormPrice = new formPrice({
    userID,
    shopActNew,
    shopActReNew,
    udhamAbhar,
    companyGST,
    rentAgreement,
    individualGST,
    foodLicense1year,
    foodLicense2year,
    foodLicense3year,
    eGazette_OpenOBC,
    eGazette_SC,
    eGazette_SBC,
    eGazette_ST,
    eGazette_VJ,
    eGazette_NT,
    passport_Normal,
    passport_Tatkal,
    learningDl_MCWOG,
    learningDl_MCWG,
    learningDl_LMV,
    learningDl_LMV_TR,
    learningDl_MCWOG_MCWG,
    learningDl_MCWOG_LMV,
    learningDl_MCWG_LMV,
    learningDl_MCWOG_MCWG_LMV,
    learningDl_MCWG_LMVTR,
    learningDl_MCWOG_LMVTR,
    learningDl_MCWOG_MCWG_LMV_TR,
    permanent_MCWOG,
    permanent_MCWG,
    permanent_LMV,
    permanent_LMV_TR,
    permanent_MCWOG_MCWG,
    permanent_MCWOG_LMV,
    permanent_MCWG_LMV,
    permanent_MCWOG_MCWG_LMV,
    permanent_MCWG_LMVTR,
    permanent_MCWOG_LMVTR,
    permanent_MCWOG_MCWG_LMV_TR,
    renew_MCWOG,
    renew_MCWG,
    renew_LMV,
    renew_LMV_TR,
    renew_MCWOG_MCWG,
    renew_MCWOG_LMV,
    renew_MCWG_LMV,
    renew_MCWOG_MCWG_LMV,
    renew_MCWG_LMVTR,
    renew_MCWOG_LMVTR,
    renew_MCWOG_MCWG_LMV_TR,
    panCard,
    voterCard,
  });

  FormPrice.save()
    .then((data) => {
        console.log(40,data)
      res.status(201).json({ data });
    })
    .catch((error) => {
        console.log(45,error)
      res.status(400).json({ error: error.message });
    });
};

exports.getFormPrice= async (req, res) => {
  console.log(res);
  try {
    const data = await formPrice.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingFormPrice = async (req, res) => {
  try {
    const singData = await formPrice.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateFormPrice= (req, res) => {
    formPrice
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deleteFormPrice = (req, res) => {
    formPrice
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

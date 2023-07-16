const formPrice = require("../model/FormPriceMDL");

exports.createFormPrice = async (req, res) => {
  const { 
    learningDL ,
    permanantDl ,
    renewDl,
    eGazzet ,
    foodLicence ,
    companyGST ,
    individualGST ,
    panCard,
    passport ,
    shopAct ,
    udhamAdhar ,
    voteCard ,
    ageDomacile ,
    EWS ,
    nonCriminal ,
    income ,

   } = req.body;
   console.log(req.body)
  const FormPrice = new formPrice({
    learningDL ,
    permanantDl ,
    renewDl,
    eGazzet ,
    foodLicence ,
    companyGST ,
    individualGST ,
    panCard,
    passport ,
    shopAct ,
    udhamAdhar ,
    voteCard ,
    ageDomacile ,
    EWS ,
    nonCriminal ,
    income ,
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

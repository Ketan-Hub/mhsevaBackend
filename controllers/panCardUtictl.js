const panUti = require("../model/pancardutimdl");

exports.createpanUti = async (req, res) => {
  const {
    retaierId,
    retailerName,
    panType,
    couponType,
    NO_coupons,
    isAccept,
    totalAmount,
    transactionID
  } = req.body;
  const PanUti = new panUti({
    retaierId,
    retailerName,
    panType,
    couponType,
    NO_coupons,
    isAccept,
    totalAmount,
    transactionID
  });

  PanUti.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getpanUti = async (req, res) => {
  console.log(res);
  try {
    const data = await panUti.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingpanUti = async (req, res) => {
  try {
    const singData = await panUti.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updatepanUti = (req, res) => {
  panUti
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deletepanUti = (req, res) => {
  panUti
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

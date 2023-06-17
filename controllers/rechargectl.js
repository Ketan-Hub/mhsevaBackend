const recharge = require("../model/recharge");

exports.createrecharge = async (req, res) => {
  const { user, mode, rechargeAmt, totalRechargeAMt } = req.body;
  const Recharge = new recharge({
    user,
    mode,
    rechargeAmt,
    totalRechargeAMt,
  });

  Recharge.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getrecharge = async (req, res) => {
  console.log(res);
  try {
    const data = await recharge.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingRecharge = async (req, res) => {
  try {
    const singData = await recharge.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updaterecharge = (req, res) => {
  recharge
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deletrecharge = (req, res) => {
  recharge
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

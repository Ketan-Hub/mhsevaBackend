const recharge = require("../model/recharge");

exports.createrecharge = async (req, res) => {
  const { userName,user, mode, amount, isExpence, expenceFor } = req.body;
  console.log(user)
  const Recharge = new recharge({
    userName,
    user,
    mode,
    amount,
    isExpence,
    expenceFor
  });

  Recharge.save()
    .then((data) => {
      console.log(17,data)
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
exports.getSingRechargeByUser = async (req, res) => {
  try {
    console.log(req.params.userId)
    const singData = await recharge.find({ user: req.params.userId });
    console.log(44,singData)
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

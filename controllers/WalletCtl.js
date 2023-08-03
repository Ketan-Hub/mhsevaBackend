const wallet = require("../model/WalletRouts");

exports.createWallet = async (req, res) => {
  console.log(444444,req.body)
  const {
    agentId,
    agentName,
    creaditAmount,
    isWithdrowl,
    isrequest,
    creaditFor,
    creaditBy,
  } = req.body;
  console.log(5, req.body);
  const Wallett = new wallet({
    agentId,
    agentName,
    creaditAmount,
    isWithdrowl,
    isrequest,
    creaditFor,
    creaditBy,
  });
  Wallett.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getwallet = async (req, res) => {
  console.log(res);
  try {
    const data = await wallet.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingleWallet = async (req, res) => {
  try {
    const singData = await wallet.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
// exports.getSingRechargeByUser = async (req, res) => {
//   try {
//     console.log(req.params.userId)
//     const singData = await recharge.find({ user: req.params.userId });
//     console.log(44,singData)
//     res.json(singData);
//   } catch (err) {
//     res.json({ err });
//   }
// };
exports.updatewallet = (req, res) => {
  wallet
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deleteWallet = (req, res) => {
  wallet
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const withdrowWallet = require("../model/withdrowValletMdl");

exports.createwithdrowWallet = async (req, res) => {
  console.log(444444,req.body)
  const {
    agentId,
    agentName,
    withdrowReqAmount,
    isAcceted,
    note,
    status,
  } = req.body;
  console.log(5, req.body);
  const WithdrowWallet = new withdrowWallet({
    agentId,
    agentName,
    withdrowReqAmount,
    isAcceted,
    note,
    status,
  });
  WithdrowWallet.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getwithdrowWallet = async (req, res) => {
  console.log(res);
  try {
    const data = await withdrowWallet.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSinglewithdrowWallet = async (req, res) => {
  try {
    const singData = await withdrowWallet.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updatewithdrowWallet = (req, res) => {
    withdrowWallet
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deletewithdrowWallet = (req, res) => {
    withdrowWallet
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const expence = require("../model/expencemdl");

exports.createExpence = async (req, res) => {
  const { user, formName, debitamount, totalExpance } = req.body;
  const Expence = new expence({
    user,
    formName,
    debitamount,
    totalExpance,
  });

  Expence.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getexpence= async (req, res) => {
  console.log(res);
  try {
    const data = await expence.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingexpence = async (req, res) => {
  try {
    const singData = await expence.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateexpence= (req, res) => {
    expence
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deletexpence = (req, res) => {
    expence
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

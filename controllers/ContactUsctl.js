const contactus = require("../model/Contact");

exports.createcontact = async (req, res) => {
  const { name, email, phoneNo, enquiryNote } = req.body;
  const Contactus = new contactus({
    name,
    email,
    phoneNo,
    enquiryNote,
  });

  Contactus.save()
    .then((data) => {
      console.log(17, data);
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getcontactus = async (req, res) => {
  console.log(res);
  try {
    const data = await contactus.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingcontactus = async (req, res) => {
  try {
    const singData = await contactus.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.getSingcontactus = async (req, res) => {
  try {
    console.log(req.params.userId);
    const singData = await contactus.find({ user: req.params.userId });
    console.log(44, singData);
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updatecontact= (req, res) => {
    contactus
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deletcontactus = (req, res) => {
    contactus
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

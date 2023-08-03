const userBalance = require("../model/UserBalence");

exports.createUserBalance = async (req, res) => {
  const {
    user,
    balance
   
   
  } = req.body;
  const UserBalance = new userBalance({
    user,
    balance
  });


  UserBalance.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.getUserBalance = async (req, res) => {
    console.log(res);
    try {
      const data = await userBalance.find();
      res.json(data);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSingUserBalance = async (req, res) => {
    try {
      const singData = await userBalance.find({ _id: req.params.id });
      res.json(singData);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updateUserBalance = (req, res) => {
    links.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.deleteUserBalance = (req, res) => {
    links.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };

const links = require("../model/addLinkmdl");

exports.createlinks = async (req, res) => {
  const {
    link,
    lable
   
   
  } = req.body;
  const Links = new links({
    link,
    lable
  });


  Links.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.getlinks = async (req, res) => {
    console.log(res);
    try {
      const data = await links.find();
      res.json(data);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSinglinks = async (req, res) => {
    try {
      const singData = await links.find({ _id: req.params.id });
      res.json(singData);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updatelinks = (req, res) => {
    links.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.deletelinks = (req, res) => {
    links.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };

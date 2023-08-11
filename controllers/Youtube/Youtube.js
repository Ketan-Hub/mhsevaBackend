const youtube = require("../../model/Youtubemdl");

exports.createYoutube = async (req, res) => {
  const {
    title,
    youtubeLink
   
   
  } = req.body;
  const Youtube = new youtube({
    title,
    youtubeLink
  });


  Youtube.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.getYoutube = async (req, res) => {
    try {
      const data = await youtube.find();
      res.json(data);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSingYoutube = async (req, res) => {
    try {
      const singData = await youtube.find({ _id: req.params.id });
      res.json(singData);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updateYoutube = (req, res) => {
    youtube.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.deleteYoutube = (req, res) => {
    youtube.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };

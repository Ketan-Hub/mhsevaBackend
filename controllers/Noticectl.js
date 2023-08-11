const notice = require("../model/NoticeBorad");
const uploadToS3 = require("../validator/midalware");

exports.createnotice = async (req, res) => {
  const {  image,
    containt,
    noticeFor,
    IsNoticeView,
    IsAlart, } = req.body;

  const Notice = new notice({
    
    containt,
    noticeFor,
    IsNoticeView,
    IsAlart,
  });

  Notice.save()
    .then((data) => {
      console.log(17,data)
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getNotice = async (req, res) => {
  console.log(res);
  try {
    const data = await notice.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingleNotice = async (req, res) => {
  try {
    const singData = await notice.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.getSingNotice = async (req, res) => {
  try {
    console.log(req.params.userId)
    const singData = await notice.find({ user: req.params.userId });
    console.log(44,singData)
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateNotice = (req, res) => {
    notice
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.image = async(req, res) => {
    let image;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      image =Location;
    }
    notice
      .findOneAndUpdate({ _id: req.params.id }, { image })
      .then((data) => {
        res.status(200).json({
          message: "notice updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
exports.deletNotice = (req, res) => {
    notice
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

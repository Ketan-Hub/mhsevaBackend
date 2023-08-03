const memberKit = require("../model/memberKit");
const uploadToS3 = require("../validator/midalware");
// const uploadToS3 = require("../validator/middleware");

exports.createBanner = async (req, res) => {
    console.log(6,req);
  try {
    let banner;
    if (req.file) {
      let fileData = req.file.buffer;
      let { Location } = await uploadToS3(fileData);
      banner = Location;
    }
    console.log(13,banner)
    const MemberKit = new memberKit({
        banner,
    });
    MemberKit
      .save()
      .then((data) => {
        res.status(200).json({
          message: "Banner updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

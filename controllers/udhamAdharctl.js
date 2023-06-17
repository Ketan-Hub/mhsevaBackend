const udhamabhar = require("../model/UdhamAdharmdl");

exports.createudhamAbhar = async (req, res) => {
  const {
    Title,
    Owner_Name,
    PAN_Card,
    Adhar_Card_no,
    GST_Number,
    Social_Category,
    Gender,
    Shop_Name,
    Mobile_Number,
    email,
    Number_of_Employee,
    Business_Started_Date,
    Shop_Address,
    Nature_Of_Business,
    Investment_Rs,
    Bank_Name,
    Bank_Account_Number,
    Bank_IFSC_Code,
    Aadhar_Upload_Card,
    emergency_mobNo,
    Pan_Upload_Card,
    Passport,
    Bank_Upload_Passbook
  } = req.body;
  const UdhamAbhar = new udhamabhar({
    Title,
    Owner_Name,
    PAN_Card,
    Adhar_Card_no,
    GST_Number,
    Social_Category,
    Gender,
    Shop_Name,
    Mobile_Number,
    email,
    Number_of_Employee,
    Business_Started_Date,
    Shop_Address,
    Nature_Of_Business,
    Investment_Rs,
    Bank_Name,
    Bank_Account_Number,
    Bank_IFSC_Code,
    emergency_mobNo,
    Aadhar_Upload_Card,
    Pan_Upload_Card,
    Passport,
    Bank_Upload_Passbook,
  });


  UdhamAbhar.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.getudhamAbhar = async (req, res) => {
    console.log(res);
    try {
      const getusers = await udhamabhar.find();
      res.json(getusers);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getsingleudhamAbhar = async (req, res) => {
    try {
      const singlData = await udhamabhar.find({ _id: req.params.id  });
      res.json(singlData);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updateudhamAbhar = (req, res) => {
    udhamabhar.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.Aadhar_Upload_Card = (req, res) => {
    let Aadhar_Upload_Card;
    if (req.file) {
      Aadhar_Upload_Card = req.file.filename;
    }
    udhamabhar
      .findOneAndUpdate({ _id: req.params.id }, { Aadhar_Upload_Card })
      .then((data) => {
        res.status(200).json({
          message: "Aadhar_Upload_Card updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.Pan_Upload_Card = (req, res) => {
    let Pan_Upload_Card;
    if (req.file) {
      Pan_Upload_Card = req.file.filename;
    }
    udhamabhar
      .findOneAndUpdate({ _id: req.params.id }, { Pan_Upload_Card })
      .then((data) => {
        res.status(200).json({
          message: "Pan_Upload_Card updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.Passport = (req, res) => {
    let Passport;
    if (req.file) {
      Passport = req.file.filename;
    }
    udhamabhar
      .findOneAndUpdate({ _id: req.params.id }, { Passport })
      .then((data) => {
        res.status(200).json({
          message: "Passport updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.Bank_Upload_Passbook = (req, res) => {
    let Bank_Upload_Passbook;
    if (req.file) {
      Bank_Upload_Passbook = req.file.filename;
    }
    udhamabhar
      .findOneAndUpdate({ _id: req.params.id }, { Bank_Upload_Passbook })
      .then((data) => {
        res.status(200).json({
          message: "Bank_Upload_Passbook updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.deleteudhamAbhar = (req, res) => {
    udhamabhar.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };
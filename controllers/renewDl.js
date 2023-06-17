const renewDl = require("../model/renewDl");

exports.createRenewDl = async (req, res) => {
  const {
    state,
    rto,
    vehical_type,
    permanantsLicenceNo,
    application_first_name,
    application_middle_name,
    application_last_name,
    relation,
    fullname_asper_record,
    gender,
    Dob,
    pob,
    cob,
    qualification,
    blood_group,
    mobile_No,
    email,
    identification_mark1,
    identification_mark2,
    emergency_mobNo,
    present_Address_State,
    present_Address_Distict,
    present_Address_tehsil,
    Present_Address_Village,
    Present_Address_Line_1,
    Present_Address_Line_2,
    present_Adderess_PinCode,
    present_Address_Same_AS_Premant_Address,
    permanent_Address_State,
    permanent_Address_Distict,
    permanent_Address_tehsil,
    permanent_Address_Village,
    permanent_Address_Line_1,
    permanent_Address_Line_2,
    permanent_Adderess_PinCode,
    permanantDrivingLicence
  } = req.body;
  const RenewDl = new renewDl({
    state,
    rto,
    vehical_type,
    permanantsLicenceNo,
    application_first_name,
    application_middle_name,
    application_last_name,
    relation,
    fullname_asper_record,
    gender,
    Dob,
    pob,
    cob,
    qualification,
    blood_group,
    mobile_No,
    email,
    identification_mark1,
    identification_mark2,
    emergency_mobNo,
    present_Address_State,
    present_Address_Distict,
    present_Address_tehsil,
    Present_Address_Village,
    Present_Address_Line_1,
    Present_Address_Line_2,
    present_Adderess_PinCode,
    present_Address_Same_AS_Premant_Address,
    permanent_Address_State,
    permanent_Address_Distict,
    permanent_Address_tehsil,
    permanent_Address_Village,
    permanent_Address_Line_1,
    permanent_Address_Line_2,
    permanent_Adderess_PinCode,
    permanantDrivingLicence
  });


RenewDl.save()
    .then((permanant) => {
      res.status(201).json({ permanant });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
  };

  exports.getrenewDl = async (req, res) => {
    console.log(res);
    try {
      const getusers = await renewDl.find();
      res.json(getusers);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSingrenewDl = async (req, res) => {
    try {
      const user = await renewDl.find({ _id: req.params.id  });
      res.json(user);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updaterenewDl = (req, res) => {
    renewDl.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.PEDL = (req, res) => {
    let permanantDrivingLicence;
    if (req.file) {
      permanantDrivingLicence = req.file.filename;
    }
    renewDl
      .findOneAndUpdate({ _id: req.params.id }, { permanantDrivingLicence })
      .then((data) => {
        res.status(200).json({
          message: "permanant Driving Licence updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.deleterenewDl = (req, res) => {
    renewDl.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };
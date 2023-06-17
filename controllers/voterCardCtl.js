const voterCard = require("../model/voterCardMdl");

exports.createvoterCard = async (req, res) => {
  const {
    assembly_Parliamentary_Constituency,
    request_name_electoral_roll_Constituency,
    name,
    Surname,
    gender,
    date_of_Birth,
    birth_Town_Village_Office,
    birth_District,
    birth_State_Union_Territory,
    relation,
    currentAddress_houseNumber,
    currentAddress_streetArea_Locality,
    currentAddress_townVillage_Office,
    currentAddress_postOffice,
    currentAddress_district,
    currentAddress_stateUnion_Territory,
    currentAddress_pincodeZip_code,
    currentAddress_ordinarily_resident_address_since,
    currentAddress_permanentAddress_currentAddress,
    permanent_address,
    permanentAddress_House_No,
    permanentAddress_streetArea_Locality,
    permanentAddress_townVillage_Office,
    permanentAddress_postOffice,
    permanentAddress_district,
    permanentAddress_stateUnion_territory,
    permanentAddress_pincodeZip_code,
    permanentAddress_telephoneMobile_Number,
    email,
    EPIC_No,
    disability,
    previous_Constituency,
    previousConstituency_state,
    addressProof,
    ageProof,
    PassportSize_photo,
    age_declaration_form,
  } = req.body;
  const VoterCard = new voterCard({
    assembly_Parliamentary_Constituency,
    request_name_electoral_roll_Constituency,
    name,
    Surname,
    gender,
    date_of_Birth,
    birth_Town_Village_Office,
    birth_District,
    birth_State_Union_Territory,
    relation,
    currentAddress_houseNumber,
    currentAddress_streetArea_Locality,
    currentAddress_townVillage_Office,
    currentAddress_postOffice,
    currentAddress_district,
    currentAddress_stateUnion_Territory,
    currentAddress_pincodeZip_code,
    currentAddress_ordinarily_resident_address_since,
    currentAddress_permanentAddress_currentAddress,
    permanent_address,
    permanentAddress_House_No,
    permanentAddress_streetArea_Locality,
    permanentAddress_townVillage_Office,
    permanentAddress_postOffice,
    permanentAddress_district,
    permanentAddress_stateUnion_territory,
    permanentAddress_pincodeZip_code,
    permanentAddress_telephoneMobile_Number,
    email,
    EPIC_No,
    disability,
    previous_Constituency,
    previousConstituency_state,
    addressProof,
    ageProof,
    PassportSize_photo,
    age_declaration_form,
  });

  VoterCard.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getvoterCard = async (req, res) => {
  console.log(res);
  try {
    const getusers = await voterCard.find();
    res.json(getusers);
  } catch {
    (err) => res.json(err);
  }
};
exports.getsinglevoterCard = async (req, res) => {
  try {
    const singlData = await voterCard.find({ _id: req.params.id });
    res.json(singlData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updatevoterCard = (req, res) => {
    voterCard
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.addressProof_Doc = (req, res) => {
  let addressProof_Doc;
  if (req.file) {
    addressProof_Doc = req.file.filename;
  }
  voterCard
    .findOneAndUpdate({ _id: req.params.id }, { addressProof_Doc })
    .then((data) => {
      res.status(200).json({
        message: "addressProof_Doc updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.ageProof_DOc = (req, res) => {
  let ageProof_DOc;
  if (req.file) {
    ageProof_DOc = req.file.filename;
  }
  voterCard
    .findOneAndUpdate({ _id: req.params.id }, { ageProof_DOc })
    .then((data) => {
      res.status(200).json({
        message: "ageProof_DOc updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.PassportSize_photo = (req, res) => {
  let PassportSize_photo;
  if (req.file) {
    PassportSize_photo = req.file.filename;
  }
  voterCard
    .findOneAndUpdate({ _id: req.params.id }, { PassportSize_photo })
    .then((data) => {
      res.status(200).json({
        message: "PassportSize_photo updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.age_declaration_form = (req, res) => {
  let age_declaration_form;
  if (req.file) {
    age_declaration_form = req.file.filename;
  }
  voterCard
    .findOneAndUpdate({ _id: req.params.id }, { age_declaration_form })
    .then((data) => {
      res.status(200).json({
        message: "age_declaration_form updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deletevoterCard = (req, res) => {
    voterCard
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const voterCard = require("../model/voterCardMdl");
const uploadToS3 = require('../validator/midalware');

exports.createvoterCard = async (req, res) => {
  const {
    application_type,
    status,
    createdBy,
    createdByName,
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
    application_type,
    status,
    createdBy,
    createdByName,
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
exports.addressProof_Doc = async(req, res) => {
  let addressProof_Doc;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    addressProof_Doc =Location;
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
exports.ageProof_DOc = async(req, res) => {
  let ageProof_DOc;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    ageProof_DOc =Location;
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
exports.PassportSize_photo = async(req, res) => {
  let PassportSize_photo;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    PassportSize_photo =Location;
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
exports.age_declaration_form = async(req, res) => {
  let age_declaration_form;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    age_declaration_form =Location;
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
exports.acknowledgmentDocument = async(req, res) => {
  let acknowledgmentDocument;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    acknowledgmentDocument =Location;
  }
  voterCard
    .findOneAndUpdate({ _id: req.params.id }, { acknowledgmentDocument })
    .then((data) => {
      res.status(200).json({
        message: "acknowledgmentDocument updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.finalDocument = async(req, res) => {
  let finalDocument;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    finalDocument =Location;
  }
  voterCard
    .findOneAndUpdate({ _id: req.params.id }, { finalDocument })
    .then((data) => {
      res.status(200).json({
        message: "finalDocument updated successfully",
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

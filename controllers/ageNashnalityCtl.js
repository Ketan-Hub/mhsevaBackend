const ageNashnality = require("../model/Age_NashnalityMdl");

exports.createageNashnality = async (req, res) => {
  const { 
    docName,
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    BirthDate,
    age,
    Gender,
    work_type,
    phoneNUm,
    email,
    AdharNo,
    Building,
    address,
    strateName,
    depart,
    landmark,
    district,
    taluka,
    village,
    pincode,
    onAddressLiveing,
    currentlivingInyear,
    Applicunt_Live_In_MH_Inyear,
    applicant_Name,
    benificiary_NameStatus,
    benificiary_Name,
    benificiary_DOB,
    Benificiary_Phoneno,
    BirthDetails,
    BirthDetails_address,
    BirthDetails_strateName,
    BirthDetails_Building,
    BirthDetails_depart,
    BirthDetails_Country,
    BirthDetails_district,
    BirthDetails_taluka,
    BirthDetails_village,
    BirthDetails_pincode,
    BenificiaryEdgucationDetails: [
      {
        begree,
        organizationName,
        AddmisionYear,
        leaveYear,
        EducationPlace,
      },
    ],
    migration_MH_From_Another_State,
    migration: [
      {
        migrationToMHYear,
        BeforeMigrationLocation,
        reasonOfMigration,
        placeOfMigration,
        MigrationStartYear,
        MigrationEndYear,
      },
    ],
    isMovablePropartyOfApp_FAther_Hus,
    Proparty_address,
    Proparty_street,
    Proparty_Building,
    Proparty_locality,
    Proparty_Country,
    Proparty_State,
    Proparty_district,
    Proparty_Tehsil,
    Proparty_village,
    Proparty_pincode,
    Benificiary_propartyHolder_Relation,
    Benificiary_propartyDetails,
    Benificiary_Father_HusRecidance,
    Benificiary_FatherRecidaceOfBirth,
    isBenificiary_FatherRecidaceOfBirth_outOf_MH,
    placeOfEmploment,
    isApllicantBenificiaryOtherState,
    ApllicantBenificiaryOtherState,
    ApllicantBenificiaryOtherState_district,
    ApllicantBenificiaryOtherState_Taluka,
    ApllicantBenificiaryOtherState_Village,
    ApllicantBenificiaryOtherState_pincode,
    CertificateReason,
    



} = req.body;
  const AgeNashnality = new ageNashnality({
    docName,
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    BirthDate,
    age,
    Gender,
    work_type,
    phoneNUm,
    email,
    AdharNo,
    Building,
    address,
    strateName,
    depart,
    landmark,
    district,
    taluka,
    village,
    pincode,
    onAddressLiveing,
    currentlivingInyear,
    Applicunt_Live_In_MH_Inyear,
    applicant_Name,
    benificiary_NameStatus,
    benificiary_Name,
    benificiary_DOB,
    Benificiary_Phoneno,
    BirthDetails,
    BirthDetails_address,
    BirthDetails_strateName,
    BirthDetails_Building,
    BirthDetails_depart,
    BirthDetails_Country,
    BirthDetails_district,
    BirthDetails_taluka,
    BirthDetails_village,
    BirthDetails_pincode,
    BenificiaryEdgucationDetails: [
      {
        begree,
        organizationName,
        AddmisionYear,
        leaveYear,
        EducationPlace,
      },
    ],
    migration_MH_From_Another_State,
    migration: [
      {
        migrationToMHYear,
        BeforeMigrationLocation,
        reasonOfMigration,
        placeOfMigration,
        MigrationStartYear,
        MigrationEndYear,
      },
    ],
    isMovablePropartyOfApp_FAther_Hus,
    Proparty_address,
    Proparty_street,
    Proparty_Building,
    Proparty_locality,
    Proparty_Country,
    Proparty_State,
    Proparty_district,
    Proparty_Tehsil,
    Proparty_village,
    Proparty_pincode,
    Benificiary_propartyHolder_Relation,
    Benificiary_propartyDetails,
    Benificiary_Father_HusRecidance,
    Benificiary_FatherRecidaceOfBirth,
    isBenificiary_FatherRecidaceOfBirth_outOf_MH,
    placeOfEmploment,
    isApllicantBenificiaryOtherState,
    ApllicantBenificiaryOtherState,
    ApllicantBenificiaryOtherState_district,
    ApllicantBenificiaryOtherState_Taluka,
    ApllicantBenificiaryOtherState_Village,
    ApllicantBenificiaryOtherState_pincode,
    CertificateReason,
})

AgeNashnality.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
        console.log("ok",error);
      res.status(400).json({ error: error.message });
    });
};

exports.getageNashnality= async (req, res) => {
  console.log(res);
  try {
    const data = await ageNashnality.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingageNashnality = async (req, res) => {
  try {
    const singData = await ageNashnality.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateageNashnality= (req, res) => {
    ageNashnality
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deletageNashnality = (req, res) => {
    ageNashnality
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

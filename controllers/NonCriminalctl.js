const NonCriminal = require("../model/nonCrinalMdl");

exports.createNonCriminal = async (req, res) => {
  const { 
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    incoCerYear,
    BirthDate,
    age,
    Gender,
    phoneNUm,
    email,
    UDI_NO,

    Applicant_address,
    Applicant_street,
    Applicant_Locality,
    Applicant_Building,
    Applicant_landmark,
    Applicant_district,
    Applicant_taluka,
    Applicant_village,
    Applicant_pincode,
    Applicant_CurrentOccupation,
    relationOfBanificiaryWithApplicant,
    benificiary_Cast,
    benificiary_Catagary,
    brnificiary_Validity_Duration,
    migration_MH_From_Another_State,
    Migrant_Distict,
    Migrant_Taluka,
    Migrant_village,
    isAppliedForCastCertificate,
    is_Certificate_Given,
    previos_CastCerNum,
    previos_CastCerPlaceIssue,
    previos_CastCerIssuedDate,
    Income_Source:[{
        SourceType,
        year:[{
            years,
            amount:{type:Number}
        }]
    }],
    father_Occopation,
    father_NameOfOrganization,
    father_DEsignation_Rank,
    father_Department,
    father_salaryRange,
    father_totalAnnualIncome,

    father_DateOfJoinning,
    father_pentionaldateOfRetirment,
    father_typeOfbusness,
    father_totalAmountInc,

    Mother_Occopation,
    Mother_NameOfOrganization,
    Mother_DEsignation_Rank,
    Mother_Department,
    Mother_salaryRange,
    Mother_totalAnnualIncome,
    Mother_DateOfJoinning,
    Mother_pentionaldateOfRetirment,
    Mother_typeOfbusness,
    Mother_totalAmountInc,
    Spouse_Occopation,

    Spouse_NameOfOrganization,
    Spouse_DEsignation_Rank,
    Spouse_Department,
    Spouse_salaryRange,
    Spouse_totalAnnualIncome,
    Spouse_DateOfJoinning,
    Spouse_pentionaldateOfRetirment,
    Spouse_typeOfbusness,
    Spouse_totalAmountInc,
    oner_OfImmovableProp,
    location_OfImmovableProp,
    Area_OfImmovableProp,
    TypeOfAgryLand,
    AreaOfAgryLand,
    Percentage_of_irrigatedland_as_per_constitutional,
    own_both_irrigated_and_dry_land_percentage,
    total_irrigated_land_as_a_percentage,
    typeOfCultivation,
    Cultivation_Location,
    Cultivation_AreaOfIrrigationLand,
    Cultivation_Location_of_property,
    Cultivation_Details_of_property,
    Cultivation_Current_use_of_property,
    Are_you_an_income_tax_payee,
    Have_you_paid_wealth_tax,
    otherFamlyDetails_solution,
    otherFamlyDetails_MotherName_English,
    otherFamlyDetails_MotherName_Marathi,
    otherFamlyDetails_solution_Spouse,
    otherFamlyDetails_SpouseName_English,
    otherFamlyDetails_SpouseName_Marathi,
    otherFamlyDetails_District,
    otherFamlyDetails_taluka,
    otherFamlyDetails_village,
    otherFamlyDetails_pincode,
    reasonDec,
    needEffidatvite
    



} = req.body;
  const nonCriminal = new NonCriminal({
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    incoCerYear,
    BirthDate,
    age,
    Gender,
    phoneNUm,
    email,
    UDI_NO,

    Applicant_address,
    Applicant_street,
    Applicant_Locality,
    Applicant_Building,
    Applicant_landmark,
    Applicant_district,
    Applicant_taluka,
    Applicant_village,
    Applicant_pincode,
    Applicant_CurrentOccupation,
    relationOfBanificiaryWithApplicant,
    benificiary_Cast,
    benificiary_Catagary,
    brnificiary_Validity_Duration,
    migration_MH_From_Another_State,
    Migrant_Distict,
    Migrant_Taluka,
    Migrant_village,
    isAppliedForCastCertificate,
    is_Certificate_Given,
    previos_CastCerNum,
    previos_CastCerPlaceIssue,
    previos_CastCerIssuedDate,
    Income_Source:[{
        SourceType,
        year:[{
            years,
            amount:{type:Number}
        }]
    }],
    father_Occopation,
    father_NameOfOrganization,
    father_DEsignation_Rank,
    father_Department,
    father_salaryRange,
    father_totalAnnualIncome,
    father_totalAnnualIncome,
    father_DateOfJoinning,
    father_pentionaldateOfRetirment,
    father_typeOfbusness,
    father_totalAmountInc,

    Mother_Occopation,
    Mother_NameOfOrganization,
    Mother_DEsignation_Rank,
    Mother_Department,
    Mother_salaryRange,
    Mother_totalAnnualIncome,
    Mother_totalAnnualIncome,
    Mother_DateOfJoinning,
    Mother_pentionaldateOfRetirment,
    Mother_typeOfbusness,
    Mother_totalAmountInc,
    Spouse_Occopation,

    Spouse_NameOfOrganization,
    Spouse_DEsignation_Rank,
    Spouse_Department,
    Spouse_salaryRange,
    Spouse_totalAnnualIncome,
    Spouse_totalAnnualIncome,
    Spouse_DateOfJoinning,
    Spouse_pentionaldateOfRetirment,
    Spouse_typeOfbusness,
    Spouse_totalAmountInc,
    oner_OfImmovableProp,
    location_OfImmovableProp,
    Area_OfImmovableProp,
    TypeOfAgryLand,
    AreaOfAgryLand,
    Percentage_of_irrigatedland_as_per_constitutional,
    own_both_irrigated_and_dry_land_percentage,
    total_irrigated_land_as_a_percentage,
    typeOfCultivation,
    Cultivation_Location,
    Cultivation_AreaOfIrrigationLand,
    Cultivation_Location_of_property,
    Cultivation_Details_of_property,
    Cultivation_Current_use_of_property,
    Are_you_an_income_tax_payee,
    Have_you_paid_wealth_tax,
    otherFamlyDetails_solution,
    otherFamlyDetails_MotherName_English,
    otherFamlyDetails_MotherName_Marathi,
    otherFamlyDetails_solution_Spouse,
    otherFamlyDetails_SpouseName_English,
    otherFamlyDetails_SpouseName_Marathi,
    otherFamlyDetails_District,
    otherFamlyDetails_taluka,
    otherFamlyDetails_village,
    otherFamlyDetails_pincode,
    reasonDec,
    needEffidatvite
})

nonCriminal.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
        // console.log(err)
      res.status(400).json({ error: error.message });
    });
};

exports.getNonCriminal= async (req, res) => {
  console.log(res);
  try {
    const data = await NonCriminal.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingNonCriminal = async (req, res) => {
  try {
    const singData = await NonCriminal.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateNonCriminal= (req, res) => {
    NonCriminal
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deletNonCriminal = (req, res) => {
    NonCriminal
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

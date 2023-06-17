const mongoose = require("mongoose");
const nonCriminalSChema = mongoose.Schema(
  {
    statusfname: { type: String},
    fullName_English: { type: String },
    fullName_Marathi: { type: String },
    fatherName_english: { type: String },
    fatherName_marathi: { type: String },
    incoCerYear: { type: String },
    BirthDate: { type: String },
    age: { type: Number },
    Gender: { type: String },
    phoneNUm: { type: Number },
    email: { type: String },
    UDI_NO: { type: String },

    Applicant_address: { type: String },
    Applicant_street: { type: String },
    Applicant_Locality: { type: String },
    Applicant_Building: { type: String },
    Applicant_landmark: { type: String },
    Applicant_district: { type: String },
    Applicant_taluka: { type: String },
    Applicant_village: { type: String },
    Applicant_pincode: { type: Number },
    Applicant_CurrentOccupation: { type: String },
    relationOfBanificiaryWithApplicant: { type: String },
    benificiary_Cast: { type: String },
    benificiary_Catagary: { type: String },
    brnificiary_Validity_Duration: { type: String },
    migration_MH_From_Another_State: { type: Boolean },
    Migrant_Distict: { type: String },
    Migrant_Taluka: { type: String },
    Migrant_village: { type: String },
    isAppliedForCastCertificate: { type: Boolean },
    is_Certificate_Given: { type: Boolean },
    previos_CastCerNum: { type: String },
    previos_CastCerPlaceIssue: { type: String },
    previos_CastCerIssuedDate: { type: String },
    Income_Source:[{
        SourceType:{type:String},
        year:[{
            years:{type:String},
            amount:{type:Number}
        }]
    }],
    father_Occopation: { type: String },
    father_NameOfOrganization: { type: String },
    father_DEsignation_Rank: { type: String },
    father_Department: { type: String },
    father_salaryRange: { type: String },
    father_totalAnnualIncome: { type: String },
    father_DateOfJoinning: { type: String },
    father_pentionaldateOfRetirment: { type: String },
    father_typeOfbusness: { type: String },
    father_totalAmountInc: { type: Number },

    Mother_Occopation: { type: String },
    Mother_NameOfOrganization: { type: String },
    Mother_DEsignation_Rank: { type: String },
    Mother_Department: { type: String },
    Mother_salaryRange: { type: String },
    Mother_totalAnnualIncome: { type: String },
    Mother_DateOfJoinning: { type: String },
    Mother_pentionaldateOfRetirment: { type: String },
    Mother_typeOfbusness: { type: String },
    Mother_totalAmountInc: { type: Number },
    Spouse_Occopation: { type: String },

    Spouse_NameOfOrganization: { type: String },
    Spouse_DEsignation_Rank: { type: String },
    Spouse_Department: { type: String },
    Spouse_salaryRange: { type: String },
    Spouse_totalAnnualIncome: { type: String },
    Spouse_DateOfJoinning: { type: String },
    Spouse_pentionaldateOfRetirment: { type: String },
    Spouse_typeOfbusness: { type: String },
    Spouse_totalAmountInc: { type: Number },
    oner_OfImmovableProp: { type: String },
    location_OfImmovableProp: { type: String },
    Area_OfImmovableProp: { type: String },
    TypeOfAgryLand: { type: String },
    AreaOfAgryLand: { type: String },
    Percentage_of_irrigatedland_as_per_constitutional: { type: String },
    own_both_irrigated_and_dry_land_percentage: { type: String },
    total_irrigated_land_as_a_percentage: { type: String },
    typeOfCultivation: { type: String },
    Cultivation_Location: { type: String },
    Cultivation_AreaOfIrrigationLand: { type: String },
    Cultivation_Location_of_property: { type: String },
    Cultivation_Details_of_property: { type: String },
    Cultivation_Current_use_of_property: { type: String },
    Are_you_an_income_tax_payee: { type: Boolean },
    Have_you_paid_wealth_tax: { type: Boolean },
    otherFamlyDetails_solution: { type: String },
    otherFamlyDetails_MotherName_English: { type: String },
    otherFamlyDetails_MotherName_Marathi: { type: String },
    otherFamlyDetails_solution_Spouse: { type: String },
    otherFamlyDetails_SpouseName_English: { type: String },
    otherFamlyDetails_SpouseName_Marathi: { type: String },
    otherFamlyDetails_District: { type: String },
    otherFamlyDetails_taluka: { type: String },
    otherFamlyDetails_village: { type: String },
    otherFamlyDetails_pincode: { type: Number },
    reasonDec: { type: String },
    needEffidatvite: { type: Boolean }



    

   
  },
  { timestamps: true }
);
module.exports = mongoose.model("nonCriminal", nonCriminalSChema);
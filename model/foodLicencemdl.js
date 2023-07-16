const mongoose=require('mongoose')


const foodLicenceSchema=mongoose.Schema(

    {
        application_type:{type:String},
        status:{type:String},
        createdBy:{type:String},
        createdByName:{type:String},
        no_OF_years:{type:String,},
        title:{type:String,},
        firstName:{type:String,},
        middleName:{type:String,},
        lastName:{type:String,},
        mobileNO:{type:Number,},
        email:{type:String,},
        businessName:{type:String,},
        shopAddess:{type:String,},
        natureBusiness:{type:String,},
        note:{type:String},
        //uploads
        acknowledgmentDocument:{type:String},
        finalDocument:{type:String},
        adharCard_businessOwner:{type:String},
        passportSize_Photo_businessOwner:{type:String},
        declaration_businessOwner:{type:String},
        affidavitFrom_businessOwner:{type:String},
        electricBill_businessPlace:{type:String},
        rentAgreement:{type:String},
        formPrice :{type: Number},
        retailerName:{type:String},
    },
    {timestamps:true}
)

module.exports=mongoose.model('foodLicence', foodLicenceSchema);
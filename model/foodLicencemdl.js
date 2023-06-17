const mongoose=require('mongoose')


const foodLicenceSchema=mongoose.Schema(

    {
        no_OF_years:{type:Number,required:true},
        title:{type:String,required:true},
        firstName:{type:String,required:true},
        middleName:{type:String,required:true},
        lastName:{type:String,required:true},
        mobileNO:{type:Number,required:true},
        email:{type:String,required:true},
        businessName:{type:String,required:true},
        shopAddess:{type:String,required:true},
        natureBusiness:{type:String,required:true},
        //uploads
        adharCard_businessOwner:{type:String},
        passportSize_Photo_businessOwner:{type:String},
        declaration_businessOwner:{type:String},
        affidavitFrom_businessOwner:{type:String},
        electricBill_businessPlace:{type:String},
        rentAgreement:{type:String}
    },
    {timestamps:true}
)

module.exports=mongoose.model('foodLicence', foodLicenceSchema);
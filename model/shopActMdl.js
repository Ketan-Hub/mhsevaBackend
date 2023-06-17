const mongoose=require('mongoose')


const ShopAct_shema=mongoose.Schema(
    {

        selectType:{type:String,required:true},
        title:{type:String,enum:['Mr','Mrs','Ms'],required:true},
        firstName:{type:String,required:true},
        middleName:{type:String,required:true},
        lastName:{type:String,required:true},
        mobileNo:{type:Number,required:true},
        email:{type:String,required:true},
        adharNumber:{type:Number,required:true},
        mobileNumber_registered_WithAdharCard:{type:Boolean,required:true},
        gender:{type:String,enum:['male','female','others'],required:true},
        dob:{type:String,required:true},
        residenceAddress_same_AadharAddress:{type:Boolean,required:true},
        residenceAddress:{type:String,required:true},
        no_of_years_staying_in_residenceAddress:{type:Number,required:true},
        shopName:{type:String,required:true},
        shopAddress_with_Pincode:{type:String,required:true},
        IsShop_Rented:{type:Boolean,required:true},
        natureOfBusiness:{type:String,required:true},
        dateBusiness_Started:{type:String,required:true},
        number_of_Employees:{type:Number,required:true},
        number_of_MenEmployees:{type:Number,required:true},
        number_of_WomenEmployees:{type:Number,required:true},
        Partner1_Name:{type:String},
        Partner1_mobileNumber:{type:Number},
        Partner1_email:{type:String},
        Partner1_address:{type:String},
        Partner2_Name:{type:String},
        Partner2_mobileNumber:{type:Number},
        Partner2_email:{type:String},
        Partner2_address:{type:String},
        Partner3_Name:{type:String},
        Partner3_mobileNumber:{type:Number},
        Partner3_email:{type:String},
        Partner3_address:{type:String},
        Partner4_Name:{type:String},
        Partner4_mobileNumber:{type:Number},
        Partner4_email:{type:String},
        Partner4_address:{type:String},
        //uploads
        ownerPassport_photo:{type:String,required:true},
        ownerSignatureAsPer_PAN:{type:String,required:true},
        adharCard:{type:String,required:true},
        shopPhotographFrom_FrontSide_WithBusinessBoard:{type:String,required:true},
        selfDeclaration:{type:String,required:true},
        ownerPANCard:{type:String,required:true},
        oldShopAct_ForRenewal:{type:String,required:true}
    },
    {timestamps:true}
)

module.exports=mongoose.model('shopAct',ShopAct_shema)
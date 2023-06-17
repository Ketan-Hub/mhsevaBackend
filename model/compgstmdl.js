const mongoose=require('mongoose')

const companyGST_Schema=mongoose.Schema(
    {
        companyName:{type:String,required:true},
        ownerName:{type:String,required:true},
        mobileNO:{type:Number,required:true},
        email:{type:String,required:true},
        businessStarted:{type:String,required:true},
        companyAddress:{type:String,required:true},
        companyPan:{type:String,required:true},
        RegCertificate:{type:Boolean,required:true},
        MOA_AOA:{type:Boolean,required:true},
        authorityLetter:{type:Boolean,required:true},
        natureBusiness:{type:String,required:true},
        //uplods
        adharCard:{type:String},
        electricityBill:{type:String},
        bankPassbook:{type:String},
        panCard:{type:String},
        passportPhoto:{type:String},
        shopAct_licence:{type:String},
        rentAgreement:{type:String},
        signature:{type:String},
    },
    {timestamps:true}
)

module.exports=mongoose.model('companyGST',companyGST_Schema)
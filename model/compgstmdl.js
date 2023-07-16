const mongoose=require('mongoose')

const companyGST_Schema=mongoose.Schema(
    {
        application_type:{type:String},
        status:{type:String},
        createdBy:{type:String},
        createdByName:{type:String},
        retailerName:{type:String},
        companyName:{type:String},
        ownerName:{type:String},
        mobileNO:{type:Number},
        email:{type:String},
        businessStarted:{type:String},
        companyAddress:{type:String},
        companyPan:{type:String},
        RegCertificate:{type:String},
        MOA_AOA:{type:String},
        authorityLetter:{type:String},
        natureBusiness:{type:String},
        note:{type:String},
        //uploads
        acknowledgmentDocument:{type:String},
        finalDocument:{type:String},
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
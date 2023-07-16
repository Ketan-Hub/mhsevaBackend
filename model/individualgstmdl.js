const mongoose=require('mongoose')

const individualGST_Schema=mongoose.Schema(
    {
        application_type:{type:String},
        status:{type:String},
        createdBy:{type:String},
        createdByName:{type:String},
        
        customerName:{type:String,},
        address:{type:String,},
        mobileNO:{type:String,},
        email:{type:String,},
        panCard:{type:String,},
        adharCard:{type:String,},
        formPrice :{type: Number},
        note:{type:String},
        //uploads
        acknowledgmentDocument:{type:String},
        finalDocument:{type:String},
        adharCard_Docs:{type:String},
        electricityBill:{type:String},
        bankPassbook:{type:String},
        panCard_Docs:{type:String},
        passportPhoto:{type:String},
        shopAct_licence:{type:String},
        rentAgreement:{type:String},
        signature:{type:String},
        retailerName:{type:String},

    },
    {timestamps:true}
)

module.exports=mongoose.model('individualGST',individualGST_Schema)
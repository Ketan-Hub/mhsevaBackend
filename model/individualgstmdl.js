const mongoose=require('mongoose')

const individualGST_Schema=mongoose.Schema(
    {
        customerName:{type:String,required:true},
        address:{type:String,required:true},
        mobileNO:{type:Number,required:true},
        email:{type:String,required:true},
        panCard:{type:String,required:true},
        adharCard:{type:Number,required:true},
        //uploads
        adharCard_Docs:{type:String},
        electricityBill:{type:String},
        bankPassbook:{type:String},
        panCard_Docs:{type:String},
        passportPhoto:{type:String},
        shopAct_licence:{type:String},
        rentAgreement:{type:String},
        signature:{type:String},
    },
    {timestamps:true}
)

module.exports=mongoose.model('individualGST',individualGST_Schema)
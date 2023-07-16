const mongoose=require('mongoose')


const panCardUTI_schema=mongoose.Schema(
    {
        retailerName:{type:String},
        panType:{type:String,enum:['new pan','company pan','minor pan','marriage pan','correction pan']},
        couponType:{type:String,enum:['coupons with pan']},
        NO_coupons:{type:Number,},
        totalAmount:{type:Number,},
        formPrice :{type: Number},
        
    },
    {timestamps:true}
)

module.exports=mongoose.model('pancard',panCardUTI_schema)
const mongoose=require('mongoose')


const panCardUTI_schema=mongoose.Schema(
    {
        retaierId:{string:String},
        retailerName:{type:String},
        panType:{type:String},
        couponType:{type:String},
        NO_coupons:{type:Number,},
        isAccept:{type:String,default:false},
        totalAmount:{type:Number,},

        
    },
    {timestamps:true}
)

module.exports=mongoose.model('pancard',panCardUTI_schema)
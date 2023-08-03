const mongoose =require("mongoose");
const recharge =mongoose.Schema(
    {
        userName:{type:String},
        user:{type:String},
        mode:{type:String},
        amount:{type:Number},
        isExpence:{type:String,default:false},
        expenceFor:{type:String}
    },
    {timestamps:true}
);
module.exports = mongoose.model("recharge", recharge);
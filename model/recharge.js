const mongoose =require("mongoose");
const recharge =mongoose.Schema(
    {
        user:{type:String},
        mode:{type:String},
        rechargeAmt:{type:Number},
        totalRechargeAMt:{type:Number}
    },
    {timestamps:true}
);
module.exports = mongoose.model("rechage", recharge);
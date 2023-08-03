const mongoose =require("mongoose");
const wallat =mongoose.Schema(
    {
        agentId:{type:String},
        agentName:{type:String},
        creaditAmount:{type:Number},
        isWithdrowl:{type:String,default:false},
        isrequest:{type:String,default:false},
        creaditFor:{type:String},
        creaditBy:{type:String}
    },
    {timestamps:true}
);
module.exports = mongoose.model("Wallet", wallat);
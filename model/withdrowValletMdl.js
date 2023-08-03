const mongoose =require("mongoose");
const withrowWallet =mongoose.Schema(
    {
        agentId:{type:String},
        agentName:{type:String},
        withdrowReqAmount:{type:Number},
        isAcceted:{type:String,default:false},
        note:{type:String,default:false},
        status:{type:String},
    },
    {timestamps:true}
);
module.exports = mongoose.model("withrowWallet", withrowWallet);
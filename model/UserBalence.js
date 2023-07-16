const mongoose =require("mongoose");
const Userbalance =mongoose.Schema(
    {
        user:{type:String},
        balance:{type:Number},
    },
    {timestamps:true}
);
module.exports = mongoose.model("Userbalance", Userbalance);
const mongoose =require("mongoose");
const expenceSchema =mongoose.Schema(
    {
        user:{type:String},
        formName:{type:String},
        debitamount:{type:Number},
        totalExpance:{type:Number}
        
    },
    {timestamps:true}
);
module.exports = mongoose.model("expence", expenceSchema);
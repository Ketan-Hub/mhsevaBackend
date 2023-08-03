const mongoose =require("mongoose");
const memberkit =mongoose.Schema(
    {
        banner:{type:String},
       
    },
    {timestamps:true}
);
module.exports = mongoose.model("memberkit", memberkit);
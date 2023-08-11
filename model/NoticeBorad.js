const mongoose =require("mongoose");
const Notice =mongoose.Schema(
    {
        image:{type:String},
        containt:{type:String},
        noticeFor:{type:String},
        IsNoticeView:{type:Boolean,default:false},
        IsAlart:{type:Boolean,default:false},
       
    },
    {timestamps:true}
);
module.exports = mongoose.model("Notice", Notice);
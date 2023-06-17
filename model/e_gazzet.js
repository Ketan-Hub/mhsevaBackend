const mongoose=require('mongoose')


const gazetteSchema=mongoose.Schema(

    {

      service_type:{type:String,enum:['name change','Dob change'],required:true},

      type_cast:{type:String,enum:['Open/OBC','SC','SBC','ST','VJ','NT'],required:true},

      title:{type:String , enum:['Mr','Mrs','Ms'],required:true},

      firstName:{type:String,required:true},

      middleName:{type:String,required:true},

      lastName:{type:String,required:true},

      mobileNumber:{type:Number,required:true},

      email:{type:String,required:true},

      adharNumber:{type:Number,required:true},

      mobileNumber_registered_with_adharCard:{type:Boolean,required:true},

      gender:{type:String,enum:['male','female','others'],required:true},

      Dob:{type:String,required:true},

      Old_Dob:{type:String},

      New_Dob:{type:String},
      OldName:{type:String},
      NewName:{type:String},

      reason:{type:String,required:true},

      address:{type:String,required:true},
      //uploads

      photoID:{type:String},

      addressProof:{type:String},

      applicationForm:{type:String},
      
      identityProof:{type:String},

      Passport_Size_Photo:{type:String},

      OldName_Proof:{type:String},

      PresentName_Proof:{type:String},

      Cast_Certificate:{type:String}


    },
    {timestamps:true}
)


module.exports=mongoose.model('gazette',gazetteSchema )
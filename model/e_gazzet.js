const mongoose=require('mongoose')


const gazetteSchema=mongoose.Schema(

    {
      application_type:{type:String},
      status:{type:String},
      createdBy:{type:String},
      createdByName:{type:String},

      service_type:{type:String},

      type_cast:{type:String},

      title:{type:String },

      firstName:{type:String,},

      middleName:{type:String,},

      lastName:{type:String,},

      mobileNumber:{type:Number,},

      email:{type:String,},

      adharNumber:{type:Number,},

      mobileNumber_registered_with_adharCard:{type:String,},

      gender:{type:String,enum:['male','female','others'],},

      Dob:{type:String,},

      Old_Dob:{type:String},

      New_Dob:{type:String},
      OldName:{type:String},
      NewName:{type:String},

      reason:{type:String,},

      address:{type:String,},
      rejNote:{type:String},
      subNote:{type:String},
      compNote:{type:String},
      //uploads
      acknowledgmentDocument:{type:String},
      finalDocument:{type:String},

      photoID:{type:String},

      addressProof:{type:String},

      applicationForm:{type:String},
      
      identityProof:{type:String},

      Passport_Size_Photo:{type:String},

      OldName_Proof:{type:String},

      PresentName_Proof:{type:String},

      Cast_Certificate:{type:String},
      formPrice :{type: Number},
      retailerName:{type:String},
      isNew:{type:Boolean,default:true}

    },
    {timestamps:true}
)


module.exports=mongoose.model('gazette',gazetteSchema )
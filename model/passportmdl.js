const mongoose=require('mongoose')


const passportSchema=mongoose.Schema(
    {
        typeApplication:{type:String,enum:['normal','tatkal'],required:true},
        typePassport:{type:Boolean,require:true},
        title:{type:String,enum:['mr','mrs','ms'],required:true},
        firstName:{type:String,required:true},
        middleName:{type:String,required:true},
        lastName:{type:String,required:true},
        mobileNumber:{type:Number,required:true},
        email:{type:String,required:true},  
        gender:{type:String,enum:['male','female','others'],required:true},
        Dob:{type:String,required:true},
        pob:{type:String,required:true},
        maritalStatus:{type:String,enum:['single','married','divorced','window','separated'],required:true},
        father_firstName:{type:String,required:true},
        father_middleName:{type:String,required:true},
        father_lastName:{type:String,required:true},
        mother_firstName:{type:String,required:true},
        mother_middleName:{type:String,required:true},
        mother_lastName:{type:String,required:true},
        spouse_firstName:{type:String},
        spouse_middleName:{type:String},
        spouse_lastName:{type:String},
        presentAddress:{type:String,required:true},
        permanantAdress_as_presentAdress:{type:Boolean,required:true},
        permanantAdress:{type:String,required:true},
        preferred_policeStation:{type:String,required:true},
        isYourParents_governmentServant:{type:Boolean,required:true},
        educationQualification:{type:String,required:true},
        employmentType:{type:String,required:true},
        appliedPassport:{type:Boolean,required:true},
        EmergencyContact_FirstName:{type:String,required:true},
        EmergencyContact_middleName:{type:String,required:true},
        EmergencyContact_lastName:{type:String,required:true},
        EmergencyContact_mobileNO:{type:Number,required:true},
        EmergencyAddress:{type:String,required:true},
        zipAllDocuments:{type:String,required:true}
    },
    {timestamps:true}
)


module.exports=mongoose.model('passport',passportSchema)
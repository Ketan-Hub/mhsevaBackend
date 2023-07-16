const mongoose=require('mongoose')


const passportSchema=mongoose.Schema(
    {
        application_type:{type:String},
        status:{type:String},
        createdBy:{type:String},
        createdByName:{type:String},
        typeApplication:{type:String,enum:['normal','tatkal'],},
        typePassport:{type:String,require:true},
        title:{type:String,enum:['mr','mrs','ms'],},
        firstName:{type:String,},
        middleName:{type:String,},
        lastName:{type:String,},
        mobileNumber:{type:Number,},
        email:{type:String,},  
        gender:{type:String,enum:['male','female','others'],},
        Dob:{type:String,},
        pob:{type:String,},
        maritalStatus:{type:String,enum:['single','married','divorced','window','separated'],},
        father_firstName:{type:String,},
        father_middleName:{type:String,},
        father_lastName:{type:String,},
        mother_firstName:{type:String,},
        mother_middleName:{type:String,},
        mother_lastName:{type:String,},
        spouse_firstName:{type:String},
        spouse_middleName:{type:String},
        spouse_lastName:{type:String},
        presentAddress:{type:String,},
        permanantAdress_as_presentAdress:{type:String,},
        permanantAdress:{type:String,},
        preferred_policeStation:{type:String,},
        isYourParents_governmentServant:{type:String,},
        educationQualification:{type:String,},
        employmentType:{type:String,},
        appliedPassport:{type:String,},
        EmergencyContact_FirstName:{type:String,},
        EmergencyContact_middleName:{type:String,},
        EmergencyContact_lastName:{type:String,},
        EmergencyContact_mobileNO:{type:Number,},
        EmergencyAddress:{type:String,},
        note:{type:String},
        //uploads
        acknowledgmentDocument:{type:String},
        finalDocument:{type:String},
        zipAllDocuments:{type:String},
     
    },
    {timestamps:true}
)


module.exports=mongoose.model('passport',passportSchema)
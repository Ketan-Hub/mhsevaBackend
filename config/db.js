// import mongoose, {connect,set} from 'mongoose';
// import dotenv from 'dotenv';
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path:'./config/.env'});
 const {APP_PORT,MONGODB_URI} = process.env;
mongoose.set('strictQuery',true);
const connectDB = ()=>{
    mongoose.
    connect(MONGODB_URI,{
        dbName:"MHeSeva"
    })
        .then(con=> console.log('Database Connected: '+ con.connection.host))
        .catch(err=>console.log(100,err));
}
module.exports={connectDB}
// export const closeDB = ()=>{
//     mongoose.connection.close();
// }
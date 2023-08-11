// import mongoose, {connect,set} from 'mongoose';
// import dotenv from 'dotenv';
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path:'./config/.env'});
 const {APP_PORT,MONGODB_URI} = process.env;
mongoose.set('strictQuery',true);
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://ketangaikwad:" +
    encodeURIComponent("Gorakh@123") +
    "@cluster0.qsabcsl.mongodb.net/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:"MHeSeva"
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
}
module.exports={connectDB}
// export const closeDB = ()=>{
//     mongoose.connection.close();
// }
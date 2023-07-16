const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = mongoose.Schema(
  {
    
    name:{type:String , },
    email: { type: String , },
    mobileNumber: { type: Number, },
    district: { type: String , },
    tehsil: { type: String , },
    village: { type: String , },
    role: { type: String, enum: ["retailer", "agent","admin"] , },
    area: { type: String, },
    address1: { type: String, },
    address2: {  type: String, },
    agent: {type: String, },
    agentMargin: { type: Number, },
    tehsilServices: { type: String,  },
    hash_password: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};
userSchema.methods = {
  matchPassword: async function(password) {
      return await bcrypt.compare(password, this.hash_password);
  },
  generateToken: async function () {
      return jwt.sign({ _id: this._id, email: this.email,role:this.role}, process.env.JWT_SECRET,{ expiresIn: "1d" });
  }
}
module.exports = mongoose.model("user", userSchema);
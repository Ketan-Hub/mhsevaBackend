const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: Number, required: true },
    district: { type: String, required: true },
    role: { type: String, required: true, enum: ["Retailer", "Agent","Admin"] },
    area: { type: String,required: true},
    address1: { type: String, required: true,},
    address2: {  type: String,  required: true,},
    agent: {type: String},
    agentMargin: { type: Number},
    apleSarkar: { type: Boolean, required: true, },
    hash_password: {
      type: String,
      required: true,
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


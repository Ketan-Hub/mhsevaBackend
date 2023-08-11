const User = require("../../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.signup = async (req, res) => {
  try{
    console.log(req.body)
    const find = await User.findOne({ email: req.body.email })
    if(find){
      return res.status(400).json({
              error: "User already registered",
            });
    }
      const {   
       name,
      email,
      mobileNumber,
      agent_formPrice,
      retaile_formPrice,
      username,
      district,
      tehsil,
      village,
      role,
      area,
      address1,
      address2,
      agent,
      password,
      agentMargin,
      tehsilServices } = req.body;
    // const hash_password = await bcrypt.hash(password, 10);
    const _user = new User({
        name,
        email,
        mobileNumber,
        district,
        tehsil,
        village,
        role,
        agent_formPrice,
        retaile_formPrice,
        username,
        area,
        address1,
        address2,
        agent,
        password,
        agentMargin,
        tehsilServices
    });
    _user.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
        console.log("ok",error);
      res.status(400).json({ error: error.message });
    });
  }catch(err){
    console.log(err)
    res.status(500).json({ err: err})
  }

  // .then(response=>{
  //   if (response)
  //     return res.status(400).json({
  //       error: "User already registered",
  //     });
  // }).catch(err=>{
  //   res.status(500).json({ err: err})
  // })
  
  // .exec(async (error, user) => {
  //   if (user)
  //     return res.status(400).json({
  //       error: "User already registered",
  //     });

  //   const {   firstName,
  //     lastName,
  //     email,
  //     mobileNumner,
  //     district,
  //     role,
  //     area,
  //     address1,
  //     address2,
  //     agent,
  //     agentMargin,
  //     apleSarkar } = req.body;
  //   // const hash_password = await bcrypt.hash(password, 10);
  //   const _user = new User({
  //       firstName,
  //       lastName,
  //       email,
  //       mobileNumner,
  //       district,
  //       role,
  //       area,
  //       address1,
  //       address2,
  //       agent,
  //       agentMargin,
  //       apleSarkar
  //   });
  //   _user.save()
  //   .then((data) => {
  //     res.status(201).json({ data });
  //   })
  //   .catch((error) => {
  //       console.log("ok",error);
  //     res.status(400).json({ error: error.message });
  //   });
   
  // });
};

// exports.signin = (req, res) => {
//   User.findOne({ email: req.body.email }).exec(async (error, user) => {
//     if (error) return res.status(400).json({ error });
//     if (user) {
//       const isPassword = await user.authenticate(req.body.password);
//       if (isPassword) {
//         const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn:"2h"});
//         const { _id, firstName, lastName, email, role, fullName } = user;
//         res.status(200).json({
//           token,
//           user: { _id, firstName, lastName, email, role, fullName },
//         });
//       } else {
//         return res.status(400).json({
//           message: "Something went wrong",
//         });
//       }
//     } else {
//       return res.status(400).json({ message: "Something went wrong" });
//     }
//   });
// };

exports.signin = async (req, res) => {
  try {
    let { username, password } = req.body;
    console.log(144,username)
    User.findOne({ username })
    .then( async (user)=>{
      console.log(147,user);
      if (user) {
        const isPassword = await user.matchPassword(password);
        console.log(isPassword)
        if (isPassword) {
          const token = await user.generateToken();
          const { _id, name, username, role, mobileNo, profilePicture } = user;
          res.cookie('token', token, { expiresIn: '1d' });
          res.status(200).json({
            token,
            user: { _id, name, username, role, mobileNo, profilePicture }
          })
        } else {
          return res.status(400).json({ message: "Invalid Password" })
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" })
      }
    })
        
  
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" })
  }
}

// exports.updateUser = (req,res)=>{
//   User.findOneAndUpdate({_id:req.params.id} ,(req.body),{new:true},(err,data)=>{
//       try{
//           res.json(data);
//       }catch(err){
//           res.json({err});
//       }
//   })
// }
// exports.updatePassword = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select("+password");
//     console.log(user)
//     const { oldPassword, newPassword } = req.body;
//     if (!oldPassword || !newPassword) {
//       return res.status(400).json({
//         success: false,
//         message: "Please provide old and new password",
//       });
//     }
//     const isMatch = await user.matchPassword(oldPassword);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Incorrect Old password",
//       });
//     }
//     user.password = newPassword;
//     await user.save();
//     res.status(200).json({
//       success: true,
//       message: "Password updated",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const shortid = require("shortid");

// const generateJwtToken = (_id, role) => {
//   return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });
// };

exports.signup = (req, res) => {
  console.log("ok")
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        error: "User already registered",
      });

    const {
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
      agentMargin,
      tehsilServices,
      password,
    
    } = req.body;
    console.log(req.body)
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
      agentMargin,
      tehsilServices,
      password,
    });

    _user.save((error, data) => {
      if (error) {
        console.log(data)
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
      if (data) {
        return res.status(201).json({
          message: "User created successfully",
          user: data,
        });
      }
    });
  });
};

exports.signin = async (req, res) => {
  try {
    let { email, password } = req.body;
    User.findOne({ email }).exec(async (error, user) => {
      if (error) {
        return res.status(400).json({ message: "Something went wrong" });
      }
      if (user) {
        const isPassword = await user.matchPassword(password);
        console.log(isPassword);
        if (isPassword) {
          const token = await user.generateToken();
          const { _id, name, email, role, mobileNo, profilePicture } = user;
          res.cookie("token", token, { expiresIn: "1d" });
          res.status(200).json({
            token,
            user: { _id, name, email, role, mobileNo, profilePicture },
          });
        } else {
          return res.status(400).json({ message: "Invalid Password" });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

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
exports.getone = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.json(user);
  } catch (err) {
    res.json({ err });
  }
};

exports.getusers = async (req, res) => {
  console.log(res);
  try {
    const getusers = await User.find();
    res.json(getusers);
  } catch {
    (err) => res.json(err);
  }
};

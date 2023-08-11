const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const uploadToS3 = require("../validator/midalware");
exports.signup = (req, res) => {
  console.log("ok");
  User.findOne({ username: req.body.email }).exec(async (error, user) => {
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
      userProfile,
      agent,
      istehsil,
      agentMargin,
      tehsilServices,
      password,
    } = req.body;
    console.log(req.body);
    // const hash_password = await bcrypt.hash(password, 10);
    const _user = new User({
      name,
      email,
      mobileNumber,
      district,
      tehsil,
      village,
      role,
      userProfile,
      agent_formPrice,
      retaile_formPrice,
      username,
      area,
      address1,
      address2,
      istehsil,
      agent,
      agentMargin,
      tehsilServices,
      password,
    });

    _user.save((error, data) => {
      if (error) {
        console.log(data);
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
    let { username, password } = req.body;
    User.findOne({ username }).exec(async (error, user) => {
      if (error) {
        return res.status(400).json({ message: "Something went wrong" });
      }
      if (user) {
        const isPassword = await user.matchPassword(password);
        console.log(isPassword);
        if (isPassword) {
          const token = await user.generateToken();
          const { _id, name, email, role, mobileNo, profilePicture,username } = user;
          res.cookie("token", token, { expiresIn: "1d" });
          res.status(200).json({
            token,
            user: { _id, name, email, role, mobileNo, profilePicture,username },
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
exports.userProfile = async(req, res) => {
  let userProfile;
  if (req.file) {
    let fileData = req.file.buffer;
    let { Location } = await uploadToS3(fileData);
    userProfile =Location;
  }
  User
    .findOneAndUpdate({ _id: req.params.id }, { userProfile })
    .then((data) => {
      res.status(200).json({
        message: "userProfile updated successfully",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

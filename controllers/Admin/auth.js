const User = require("../../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
JWT_SECRET="PROJECTSECRET";
exports.signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (user) {
      return res.status(400).json({
        error: "User already registered",
      });
    }
    // const hashPass = await bcrypt.hash(password, 10);


    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      district,
      role,
      area,
      address1,
      address2,
      agent,
      agentMargin,
      apleSarkar,
      password,
    } = req.body;

    const _user = new User({
      firstName,
      lastName,
      email,
      mobileNumber,
      district,
      role,
      area,
      address1,
      address2,
      agent,
      agentMargin,
      apleSarkar,
      hash_password,
    });

    const savedUser = await _user.save();

    return res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Something went wrong",
      
    });
  }
};



// exports.signin = (req, res) => {
//   User.findOne({ email: req.body.email })
//     .then(async (user) => {
//       console.log(71,user);
//       if (!user) {
//         return res.status(400).json({ message: "User not found" });
//       }

//       const isPassword = await user.authenticate(req.body.password);
//       console.log(77,isPassword)
//       if (!isPassword) {
//         return res.status(400).json({ message: "Invalid credentials" });
//       }

//       const token = jwt.sign(
//         { _id: user._id, role: user.role },
//        JWT_SECRET,
//         { expiresIn: "1d" }
//       );

//       const { _id, firstName, lastName, email, role } = user;
//       return res.status(200).json({
//         token,
//         user: { _id, firstName, lastName, email, role },
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.status(500).json({ message: "Something went wrong" });
//     });
// };
// exports.signin = async (req, res) => {
//   try {
//     let { email, password } = req.body;
//     User.findOne({ email }).exec(async (error, user) => {
//       if (error) { return res.status(400).json({ message: "Something went wrong" }) }
//       if (user) {
//         const isPassword = await user.matchPassword(password);
//         console.log(isPassword)
//         if (isPassword) {
//           const token = await user.generateToken();
//           const { _id, firstName, email, role, mobileNumber } = user;
//           res.cookie('token', token, { expiresIn: '1d' });
//           res.status(200).json({
//             token,
//             user: {_id, firstName, email, role, mobileNumber }
//           })
//         } else {
//           return res.status(400).json({ message: "Invalid Password" })
//         }
//       } else {
//         return res.status(400).json({ message: "Something went wrong" })
//       }
//     })
//   } catch (err) {
//     res.status(400).json({ message: "Something went wrong" })
//   }
// }
exports.signin = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    console.log(password,user)
    if (user) {
      const isPassword = await user.matchPassword(password);
      console.log(isPassword);
      
      if (isPassword) {
        const token = await user.generateToken();
        const { _id, firstName, email, role, mobileNumber } = user;
        
        res.cookie('token', token, { expiresIn: '1d' });
        return res.status(200).json({
          token,
          user: { _id, firstName, email, role, mobileNumber }
        });
      } else {
        return res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};



exports.getUser = async (req, res) => {
  try {
    const response = await User.find();
    const filter = response.filter((user) => user.role === "Retailer");
    res.json(filter);
  } catch {
    (err) => res.json(err);
  }
};
exports.getAgent = async (req, res) => {
  try {
    const response = await User.find();
    const filter = response.filter((user) => user.role === "Agent");
    res.json(filter);
  } catch {
    (err) => res.json(err);
  }
};

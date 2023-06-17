const Ews = require("../model/EWSMdl");

exports.createEws = async (req, res) => {
  const {
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    incoCerYear,
    BirthDate,
    // age,
    // Gender,
    // Bussness,
    // phoneNUm,
    // email,
    // AdharNo,

    // Applicant_address,
    // Applicant_street,
    // Applicant_Building,
    // Applicant_vasti,
    // Applicant_PopularPlace,
    // Applicant_district,
    // Applicant_taluka,
    // Applicant_village,
    // Applicant_pincode,

    // relationOfBanificiaryWithApplicant,
    // Benificiary_Address,
    // Benificiary_Name_English,
    // Benificiary_Name_marathi,
    // Benificiary_Dob,
    // Benificiary_gender,
    // Benificiary_mobNumber,
    // Benificiary_Email,
    // Benificiary_AdharNo,
    // benificiary_Cast,
    // Income_Source: [
    //   {
    //     SourceType,
    //     year: [
    //       {
    //         years,
    //         amount,
    //       },
    //     ],
    //   },
    // ],
   
  } = req.body;
  const ews = new Ews({
    
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    incoCerYear,
    BirthDate,
//     age,
//     Gender,
//     Bussness,
//     phoneNUm,
//     email,
//     AdharNo,

//     Applicant_address,
//     Applicant_street,
//     Applicant_Building,
//     Applicant_vasti,
//     Applicant_PopularPlace,
//     Applicant_district,
//     Applicant_taluka,
//     Applicant_village,
//     Applicant_pincode,

//     relationOfBanificiaryWithApplicant,
//     Benificiary_Address,
//     Benificiary_Name_English,
//     Benificiary_Name_marathi,
//     Benificiary_Dob,
//     Benificiary_gender,
//     Benificiary_mobNumber,
//     Benificiary_Email,
//     Benificiary_AdharNo,
//     benificiary_Cast,
//     Income_Source: [
//       {
//         SourceType,
//         year: [
//           {
//             years,
//             amount,
//           },
//         ],
//       },
//     ],
  });


  ews.save()
    .then((data) => {
        // console.log(data)
      res.status(201).json({ data });
    })
    .catch((error) => {
        console.log(error)
      res.status(400).json({ error: error.message });
    });
  };

  exports.getEws = async (req, res) => {
    console.log(res);
    try {
      const getusers = await Ews.find();
      res.json(getusers);
    } catch {
      (err) => res.json(err);
    }
  };
  exports.getSingEws = async (req, res) => {
    try {
      const user = await Ews.find({ user: req.params.id });
      res.json(user);
    } catch (err) {
      res.json({ err });
    }
  };
  exports.updateEws = (req, res) => {
    Ews.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  };
//   exports.photoID = (req, res) => {
//     let photoID;
//     if (req.file) {
//       photoID = req.file.filename;
//     }
//     e_gazzet
//       .findOneAndUpdate({ _id: req.params.id }, { photoID })
//       .then((data) => {
//         res.status(200).json({
//           message: "photo ID updated successfully",
//           data,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({ error: error.message });
//       });
//   };
//   exports.addressProof = (req, res) => {
//     let addressProof;
//     if (req.file) {
//       addressProof = req.file.filename;
//     }
//     e_gazzet
//       .findOneAndUpdate({ _id: req.params.id }, { addressProof })
//       .then((data) => {
//         res.status(200).json({
//           message: "photo ID updated successfully",
//           data,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({ error: error.message });
//       });
//   };
//   exports.applicationForm = (req, res) => {
//     let applicationForm;
//     if (req.file) {
//       applicationForm = req.file.filename;
//     }
//     e_gazzet
//       .findOneAndUpdate({ _id: req.params.id }, { applicationForm })
//       .then((data) => {
//         res.status(200).json({
//           message: "photo ID updated successfully",
//           data,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({ error: error.message });
//       });
//   };
//   exports.identityProof = (req, res) => {
//     let identityProof;
//     if (req.file) {
//       identityProof = req.file.filename;
//     }
//     e_gazzet
//       .findOneAndUpdate({ _id: req.params.id }, { identityProof })
//       .then((data) => {
//         res.status(200).json({
//           message: "identity Proof updated successfully",
//           data,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({ error: error.message });
//       });
//   };
//   exports.Passport_Size_Photo = (req, res) => {
//     let Passport_Size_Photo;
//     if (req.file) {
//       Passport_Size_Photo = req.file.filename;
//     }
//     e_gazzet
//       .findOneAndUpdate({ _id: req.params.id }, { Passport_Size_Photo })
//       .then((data) => {
//         res.status(200).json({
//           message: "identity Proof updated successfully",
//           data,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({ error: error.message });
//       });
//   };
//   exports.OldName_Proof = (req, res) => {
//     let OldName_Proof;
//     if (req.file) {
//       OldName_Proof = req.file.filename;
//     }
//     e_gazzet
//       .findOneAndUpdate({ _id: req.params.id }, { OldName_Proof })
//       .then((data) => {
//         res.status(200).json({
//           message: "identity Proof updated successfully",
//           data,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({ error: error.message });
//       });
//   };
//   exports.PresentName_Proof = (req, res) => {
//     let PresentName_Proof;
//     if (req.file) {
//       PresentName_Proof = req.file.filename;
//     }
//     e_gazzet
//       .findOneAndUpdate({ _id: req.params.id }, { PresentName_Proof })
//       .then((data) => {
//         res.status(200).json({
//           message: "identity Proof updated successfully",
//           data,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({ error: error.message });
//       });
//   };
//   exports.Cast_Certificate = (req, res) => {
//     let Cast_Certificate;
//     if (req.file) {
//       Cast_Certificate = req.file.filename;
//     }
//     e_gazzet
//       .findOneAndUpdate({ _id: req.params.id }, { Cast_Certificate })
//       .then((data) => {
//         res.status(200).json({
//           message: "identity Proof updated successfully",
//           data,
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({ error: error.message });
//       });
//   };


  exports.deleteEws = (req, res) => {
    Ews.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          res.json(data);
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
  
  };
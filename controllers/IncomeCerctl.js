const incomeCer = require("../model/income_certificatemdl");

exports.createIncomeCer = async (req, res) => {
  const { 
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    incoCerYear,
    BirthDate,
    age,
    Gender,
    work_type,
    phoneNUm,
    email,
    PanNo,
    AdharNo,
    address,
    strateName,
    depart,
    Building,
    landmark,
    district,
    taluka,
    village,
    pincode,
    family: [
      {
        relation,
        Name,
        AgeOfRelative,
        WorkTypeOfRelative,
        incomeOfRelative,
      },
    ],
    relationOfApplicant,
    statusOfApplicant,
    NameOfApplicant,
    ReasonOfApllication,
    distibutionOfIncomefromAgri: [
      {
        accountHolder_Name,
        totalfarm,

        accountHolder_DIstrict,
        accountHolder_Taluka,
        accountHolder_village,
      },
    ],
    familyIncomeType,
    incomeYear: [
      {
        year,
        Income,
      },
    ],
    IncomeTypeDiscription,
    IncomeDOcsName,
    



} = req.body;
  const IncomeCer = new incomeCer({
    statusfname,
    fullName_English,
    fullName_Marathi,
    fatherName_english,
    fatherName_marathi,
    incoCerYear,
    BirthDate,
    age,
    Gender,
    work_type,
    phoneNUm,
    email,
    PanNo,
    AdharNo,
    address,
    strateName,
    depart,
    Building,
    landmark,
    district,
    taluka,
    village,
    pincode,
    family: [
      {
        relation,
        Name,
        AgeOfRelative,
        WorkTypeOfRelative,
        incomeOfRelative,
      },
    ],
    relationOfApplicant,
    statusOfApplicant,
    NameOfApplicant,
    ReasonOfApllication,
    distibutionOfIncomefromAgri: [
      {
        accountHolder_Name,
        totalfarm,

        accountHolder_DIstrict,
        accountHolder_Taluka,
        accountHolder_village,
      },
    ],
    familyIncomeType,
    incomeYear: [
      {
        year,
        Income,
      },
    ],
    IncomeTypeDiscription,
    IncomeDOcsName,
})

IncomeCer.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
        // console.log(err)
      res.status(400).json({ error: error.message });
    });
};

exports.getincomeCer= async (req, res) => {
  console.log(res);
  try {
    const data = await incomeCer.find();
    res.json(data);
  } catch {
    (err) => res.json(err);
  }
};
exports.getSingincomeCer = async (req, res) => {
  try {
    const singData = await incomeCer.find({ _id: req.params.id });
    res.json(singData);
  } catch (err) {
    res.json({ err });
  }
};
exports.updateincomeCer= (req, res) => {
    incomeCer
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.deletincomeCer = (req, res) => {
    incomeCer
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

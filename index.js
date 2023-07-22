const express = require("express");
const bodyParser = require("body-parser");
const ageNashnality = require("./model/Age_NashnalityMdl");
const Ews = require("./model/EWSMdl");
const incomeCer = require("./model/income_certificatemdl");
const NonCriminal = require("./model/nonCrinalMdl");
const { connectDB } = require("./config/db");
const  translate =require( '@iamtraction/google-translate');

// 11 form

const e_gazzet=require("./model/e_gazzet")
const learning=require("./model/learningDl")
const permanant=require("./model/permanantDl")
const renew=require("./model/renewDl")
const udhamcard=require("./model/UdhamAdharmdl")
const compGST=require("./model/compgstmdl")
const indivisualGST=require("./model/individualgstmdl")
const foodLicence=require("./model/foodLicencemdl")
const passport=require("./model/passportmdl")
const shopAct=require("./model/shopActMdl")
const voterCard=require("./model/voterCardMdl")


const app = express();
let allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(express.urlencoded({ extended: true }));
app.use(allowCrossDomain);
connectDB();
app.use(bodyParser.json());
app.use("/api", require("./routes/learnning"));
app.use("/api", require("./routes/permannt"));
app.use("/api", require("./routes/renew"));
app.use("/api", require("./routes/e_gazzetrout"));
app.use("/api", require("./routes/foodLicenceRout"));
app.use("/api", require("./routes/compgstRout"));
app.use("/api", require("./routes/individualgstrout"));
app.use("/api", require("./routes/passportrout"));
app.use("/api", require("./routes/panutirout"));
app.use("/api", require("./routes/udhamAdharrout"));
app.use("/api", require("./routes/linkRouts"));
app.use("/api", require("./routes/ShopActRouts"));
app.use("/api", require("./routes/VoterCardRout"));
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/incomeCerRout"));
app.use("/api", require("./routes/AgeNashnalityRout"));
app.use("/api", require("./routes/nonCriminalrouts"));
app.use("/api", require("./routes/EwsRout"));
app.use("/api", require("./routes/rechargerout"));
app.use("/api", require("./routes/formPriceRts"));
app.use("/api", require("./routes/valletrout"));
app.use("/api", require("./routes/WithrowWallet"));

app.post('/translate', async (req, res) => {
  translate(req.body.text, { from: 'en', to: 'mr' }).then(response => {
     res.json({output:response.text})
    }).catch(err => {
      console.error(err);
});
})


app.get('/api/getAll',async (req,res)=>{
  const NonCriminalData = await NonCriminal.find({});
  const incomeCerData = await incomeCer.find({});
  const ageNashnalityData = await ageNashnality.find({});
  const ewsData = await Ews.find({}); 
  const allData = [...NonCriminalData,...incomeCerData,...ageNashnalityData,...ewsData]
  const dataToSend = allData.sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt)).reverse()
  res.json(dataToSend)
});

app.get('/api/getAll/Form11',async (req,res)=>{

const e_gazzetData=await e_gazzet.find({});
const learningData=await learning.find({});
const permanantData=await permanant.find({});
const renewData=await renew.find({});
const udhamcardData=await udhamcard.find({});
const compGSTData=await compGST.find({});
const indivisualGSTData=await indivisualGST.find({});
const foodLicenceData=await foodLicence.find({});
const passportData=await passport.find({});
const shopActData=await shopAct.find({});
const voterCardData=await voterCard.find({});
  const allData= [...e_gazzetData,...learningData,...permanantData,...renewData,...udhamcardData,
  ...compGSTData,...indivisualGSTData,...foodLicenceData,...passportData,...shopActData,...voterCardData]


  const dataToSend = allData.sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt)).reverse()
  res.json(dataToSend)
});

app.get('/',(req,res)=>{
  return res.send('Welcome To Our API');
})

app.listen(5001, () => {
  console.log("Server Is Running");
});
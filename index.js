
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");
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

app.listen(5001, () => {
  console.log("Server Is Running");
});


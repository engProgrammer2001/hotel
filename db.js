const mongoose = require("mongoose");

// define the mongoDB connection URL
const mongoURL = "mongodb://127.0.0.1:27017/hotels"; // in the place of hotel i can use any name

// const mongoURL = "mongodb+srv://kushwahaashokkumar82:9GAlUzMU56FzDByT@cluster0.zspmqhn.mongodb.net/"

// connect to mongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongoose maintains a default connection object representing the MangoDB connections
const db = mongoose.connection;

// Event Listner for show the diferent message *connected/error/disconnected is already define in mongoDB*
db.on("connected", () => {
  console.log("Connected MongoDB server");
});

db.on("error", () => {
  console.log("MangoDB connection error");
});

db.on("disconnected", () => {
  console.log("MongoDB connection is disconnected");
});

module.exports = db;

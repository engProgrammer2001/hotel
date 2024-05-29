// for starting a server write "npm run start"

const express = require("express");
const app = express();
// dur to this line databas connection stablish
const db = require("./db");

// for body-parser convert data into the Json formate it will store data in req.body
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const MenuItems = require("./models/MenuItems.js");

app.get("/", function (req, res) {
  res.send("your server is running succesfully! Welcome to My Hotels");
});

// import the router files from PersonRoutes.js
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

// import the router files from menuRoutes.js
const menuRoutes = require("./routes/menuRoutes.js");
app.use("/menu", menuRoutes);


// here i have to define server port and message on console
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

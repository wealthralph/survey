const express = require("express");
const cors = require("cors");
const key = require("../config/key");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser')
require("../models/user.model");
require("../services/passport.js");

const app = express();
app.use(bodyParser.json())
app.use(cors());

app.get("/", (req, res) => {
  
});

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [key.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());


require("../routes/auth.routes")(app);
require('../routes/billing.routes')(app)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
module.exports = app;

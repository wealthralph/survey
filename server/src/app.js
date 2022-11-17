const express = require("express");
require("../models/user.model");
require("../services/passport.js");

const app = express();
require("../routes/auth.routes")(app);

module.exports = app;

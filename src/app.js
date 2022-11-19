const express = require("express");
const cors = require("cors");
const key = require('../config/key');
const passport = require("passport");
const cookieSession =require('cookie-session')
require("../models/user.model");
require("../services/passport.js");

const app = express();
 
app.get('/', (req, res) => {
    res.send({geef : "fosvdvsvsdv"})
})

app.use(
    cookieSession({
        maxAge: 30 *24 * 60* 60 * 1000,
        keys:[key.cookieKey]
    })
    )
    
    app.use(passport.initialize());
    app.use(passport.session())
    
    app.use(
        cors({
            origin: "http://localhost:5000",
            methods: "GET,POST,PUT,DELETE",
            credentials: true,
        })
        );
        
require("../routes/auth.routes")(app);
module.exports = app;

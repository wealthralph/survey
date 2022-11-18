const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("../config/keys");
const mongoose = require('mongoose')





const User =mongoose.model('users')

passport.serializeUser((user,done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
});

passport.use(
    new GoogleStrategy(
      {
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, Profile, done) => {
        User.findOne({googleId: Profile.id}).then(existingUser => {
          if(existingUser) {
            done(null, existingUser)
          }else {
            new User({googleId: Profile.id}).save()
            .then(user => (null, user))

          }
        })
      }
    )
  );

  module.exports
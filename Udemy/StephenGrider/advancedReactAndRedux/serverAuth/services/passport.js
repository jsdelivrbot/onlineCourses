// JWT is for token authentication
// LOCAL is having a corret username and password

const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const { Strategy, ExtractJwt } = require('passport-jwt');
const LocalStretegy = require('passport-local');


const localOptions = {
  usernameField: 'email'
}
// Create local strategy
const localLogin = new LocalStretegy(localOptions, (email, password, done) => {
  // Verify email and password
  // if exist done with user ?
  // NOT CORRECT then done(null, false);
  User.findOne({ email }, (err, user) => {
    if(err) return done(err, false);
    if(!user) { return done(null, false); }

    // compare passwords
    user.comparePassword(password, (err, isMatch) => {
      if(err) return done(err);
      if (!isMatch) return done(null, false);

      return done(null, user);
    })
  })
})

// Setup option for JWT Strategy
const jwtOption = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secrete
};


// Create JWT Strategy
const jwtLogin = new Strategy(jwtOption, function (payload, done) {
  // is user in our db ? 
    // return user
  // else
    // return false
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);
    if (user) return done(null, user);
    else return done(null, false);
  })
});

passport.use(jwtLogin);
passport.use(localLogin);

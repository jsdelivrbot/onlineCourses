const User = require('../models/user');
const jwt = require('jwt-simple');
const { secrete } = require('../config');

function tockenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user._id, iat: timeStamp }, secrete);
}

function signin(req, res, next) {
  // User already have their email and password wuth'd
  // We just need to give them a token
  res.send({ token: tockenForUser(req.user) });
}

function signup(req, res, next) {
  const { email, password } = req.body;
  // find if user with given email exist

  if (!email || !password) return res.status(422).send({ err: 'both email and password is required' });

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    // if does then 
    if (existingUser) return res.status(422).send({ err: 'email is in use' }); // cannot process    
    // if it is new email then 
    const user = new User({ email, password })
    user.save((err) => {
      if (err) return next(err);
      res.json({ token: tockenForUser(user) });
    });
  })
}


module.exports = {
  signup,
  signin 
}
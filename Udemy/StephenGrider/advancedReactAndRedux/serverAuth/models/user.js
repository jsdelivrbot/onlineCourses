const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bycript = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// before saving, run this function
userSchema.pre('save', function (next) {
  const user = this;

  bycript.genSalt(10, (err, salt) => {
    if (err) return next(err);
    console.log('salt: ', salt);

    bycript.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      console.log('user.password: ', user.password);
      next();
    })
  })
})

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bycript.compare(candidatePassword, this.password, function (err, isMatch) {
    if(err) return callback(err);
    callback(null, isMatch);
  })
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;



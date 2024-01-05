const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const learnerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

learnerSchema.statics.signup = async function (email, password) {
  const User = this;

  const exists = await User.findOne({ email });

  if (exists) {
    throw new Error("Email is already in use");
  }
  if (!email || !password) {
    throw new Error("all fields must be filled!");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw new Error("Password is not strong!");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await User.create({ email, password: hash });

  return user;
};

learnerSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})
    if(!user){
        throw new Error("credentials are invalid!")
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw new Error("credentials are invalid!")
    }
    return user;
}

module.exports = mongoose.model("Learner", learnerSchema)
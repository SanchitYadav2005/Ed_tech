const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const useSchema = new Schema({
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
userSchema.statics.signup = async (email, password) => {
  const exists = await this.findOne({ email });
  if(exists){
    throw Error("user already exists!")
  }
  if (!email || !password) {
    throw Error("all fields must be filled!");
  }
  if (!validator.isEmail) {
    throw Error("this email is not valid");
  }
  if (
    (!validator.isStrongPassword,
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw Error("password is not strong!");
  }
};

module.exports = mongoose.model("User", useSchema);

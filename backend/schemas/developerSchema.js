const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const developerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  notes: { type: Schema.Types.ObjectId, ref: "File" },
});

// Correctly defining the signup method
developerSchema.statics.signup = async function (email, password, role) {
  const User = this; // Referring to the User model

  // Check if user exists with the provided email
  const exists = await User.findOne({ email });
  if (exists) {
    throw new Error("User already exists!");
  }

  if (!email || !password || !role) {
    throw new Error("All fields must be filled!");
  }

  // Validate the email using validator
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email!");
  }

  // Validate password strength using validator
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw new Error("Password is not strong enough!");
  }
  // password protection.
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await User.create({ email, password: hash, role });

  return user;
};

developerSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("email is incorrect!");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("email or password is incorrect!");
  }
  return user;
};

module.exports = mongoose.model("Developer", developerSchema);

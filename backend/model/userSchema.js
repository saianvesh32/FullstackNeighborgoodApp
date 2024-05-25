const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId: String,
    displayName: String,
    email: { type: String, required: true, unique: true },
    image: String
  }, { timestamps: true });
  

const userdb = new mongoose.model("users1",userSchema);

module.exports = userdb;
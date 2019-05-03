const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  fbId: String
});

mongoose.model("users", userSchema);

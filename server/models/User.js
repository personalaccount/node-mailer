const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { Schema } = mongoose; // The mongoose obj. has a property called Schema, take this property and assign it to the var. Schema

// Create a user schema and pass an object to describe all the properties
const userSchema = new Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  accessToken: String,
  refreshToken: String
});

// Load the user schema into Mongoose
mongoose.model("users", userSchema);
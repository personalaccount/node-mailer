const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { Schema } = mongoose; // The mongoose obj. has a property called Schema, take this property and assign it to the var. Schema

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;

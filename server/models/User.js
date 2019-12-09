const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { Schema } = mongoose; // The mongoose obj. has a property called Schema, take this property and assign it to the var. Schema

// pass an object to describe all the properties
const userSchema = new Schema ({
    googleId: String,
    firstName: String,
    lastName: String
});

// create a new collection for users
mongoose.model('users', userSchema);


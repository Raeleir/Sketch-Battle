const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wins: Number,
    losses: Number
});


module.exports = mongoose.models("users", userSchema);
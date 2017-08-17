const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let promptSchema = new Schema({
    word: String
});


module.exports = mongoose.model("prompts", promptSchema);
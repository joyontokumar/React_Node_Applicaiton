// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// user schema 
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('user', userSchema);
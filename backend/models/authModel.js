const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {type: String, required: true},
    userId : {type: String, required: true},
    email : {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true}
});

const User = mongoose.model('users', UserSchema );

module.exports = User;
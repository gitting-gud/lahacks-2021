const mongoose = require('mongoose')

const userTemplate = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    active_cards:{
        type:Array,
    }
})

const User = mongoose.model('users', userTemplate);
module.exports = User;
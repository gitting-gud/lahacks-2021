const mongoose = require('mongoose')

const userCardTemplate = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    campaign:{
        type:String,
        required:true
    },
    entries:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model('userCard', userCardTemplate)
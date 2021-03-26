const mongoose = require('mongoose')

const stampTemplate = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    campaign:{
        type:String,
        required:true
    },
    business:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Stamp = mongoose.model('stamps', stampTemplate);
module.exports = Stamp;
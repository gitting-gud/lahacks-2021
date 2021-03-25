const mongoose = require('mongoose')

const userTemplate = new mongoose.Schema({
    uuid:{
        type:String,
        required:true
    },
    active_cards:{
        type:Array,
    }
})
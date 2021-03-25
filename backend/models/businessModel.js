const mongoose = require('mongoose')

const businessTemplate = new mongoose.Schema({
    uuid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    campaigns:{
        type: Array,
        required:true
    },
    pending:{
        type: Array,
        required:true
    },
    //stretch goal
    icon:{},
    lat:{
        type:Number
    },
    long:{
        type:Number
    }
})
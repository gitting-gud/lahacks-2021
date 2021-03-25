const mongoose = require('mongoose')

const stampCardTemplate = new mongoose.Schema({
    uuid:{
        type:String,
        required:true
    },
    reward_name:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        required:true
    },
    num_stamps:{
        type:Number,
        required:true
    },
    participants:{
        type:Number,
        required:true,
    },
    start_date:{
        type:String,
        required:true
    },
    end_date:{
        type:String,
        required:true
    },
    reward_details:{
        type:String,
        required:true
    },

    //stretch goal
    stamp_icon:{}
})
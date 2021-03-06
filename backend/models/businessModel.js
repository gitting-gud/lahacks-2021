const mongoose = require('mongoose')

const businessTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    campaigns: {
        type: Array,
        required: true
    },
    pending: {
        type: Array,
        required: true
    },
    //stretch goal
    icon: {},
    lat: {
        type: Number
    },
    long: {
        type: Number
    }
})

const Business = mongoose.model('businesses', businessTemplate);
module.exports = Business;
const mongoose = require('mongoose');

const appointments = new mongoose.Schema({
    appointBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    appointFor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"diagnosed"
    },
    appointStatus:{
        type:String,
        enum:["Pending", "Approved"],
        default:"Pending"
    },
    appointDate:{
        type:String
    },
    appointTime:{
        type:String
    },
    appointDoctor:{
        type:String
    },
    doctorContact:{
        type:Number
    }
});

module.exports = mongoose.model('appointments',appointments);
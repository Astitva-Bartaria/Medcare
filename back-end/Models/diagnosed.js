const mongoose = require('mongoose');

const diagnosed = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    diseases:{
        type:String
    },
    medicines:[{
        type:String
    }],
    wantAppoint:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('diagnosed',diagnosed);
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    accountType:{
        type:String,
        enum:["patient","doctor"],
        default:"patient"
    },
    userEmail:{
        type:String,
        required:true
    },
    userPassword:{
        type:String,
        required:true
    },
    userDob:{
        type:Date
    },
    userGender:{
        type:String,
        enum:['male','female','other'],
        default:'male'
    },
    userCountry:{
        type:String
    },
    userRegion:{
        type:String
    }
});

module.exports = mongoose.model('user', user);
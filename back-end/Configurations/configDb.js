const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{console.log('DATABASE CONNECTION ESTABLISHED')})
    .catch((err)=>{console.log(err)})
}


module.exports = dbConnect;
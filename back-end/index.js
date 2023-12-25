const express = require('express');
const app = express();
const dbConnect = require('./Configurations/configDb');
const cors = require('cors');
const route = require('./Routes/Route');

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use('/medLife/v1',route);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`APP IS RUNNING AT ${PORT}`);
})
dbConnect();
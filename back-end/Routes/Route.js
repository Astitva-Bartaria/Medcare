const express = require('express');
const route = express.Router();

//Normal User Register and Login
const userRegister = require('../Controllers/userRegister');
const userLogin = require('../Controllers/userLogin');
const userDetails = require('../Controllers/userDetails');
const editDetails = require('../Controllers/editDetails');

//Disease Results
const diagnosisResult = require('../Controllers/diagnosisResults');
const getdiagnosisResults = require('../Controllers/getDiagnosisRes');

//Appointments Controllers
const bookAppointment = require('../Controllers/bookAppointment');
const arrangeAppointment = require('../Controllers/arrangeAppointment');
const userAppointment = require('../Controllers/userAppointments');
const doctorAppoint = require('../Controllers/doctorAppoints');
const allAppointmentDoc = require('../Controllers/allAppointmentDoc');
const drugRecommendation = require('../Controllers/drugRecommendation');

//Middlewares imported here
const isLoggedIn = require('../Middlewares/isLoggedIn');
const isDoctor = require('../Middlewares/isDoctor');

//routing routes according to operations
route.post('/ur',userRegister);
route.post('/ul',userLogin);
route.get('/ud', isLoggedIn, userDetails);
route.post('/ed', isLoggedIn, editDetails);
route.get('/dr/:dis', isLoggedIn, diagnosisResult);
route.get('/gd', isLoggedIn, getdiagnosisResults);
route.get('/ba/:appId', isLoggedIn, bookAppointment);
route.get('/aa', isLoggedIn, isDoctor, arrangeAppointment);
route.get('/uaa', isLoggedIn, userAppointment);
route.post('/daa/:appId', isLoggedIn, isDoctor, doctorAppoint);
route.get('/ada', isLoggedIn, isDoctor, allAppointmentDoc);
route.post('/dra/:appId', isLoggedIn, isDoctor, drugRecommendation);

//exporting route
module.exports = route;
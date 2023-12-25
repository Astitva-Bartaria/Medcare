const appointment = require('../Models/appointments');

async function allAppointmentDoc(req,res){
    try {
        const allAppoint = await appointment.find({}).populate("appointBy");
        res.status(200).json({
            message:"All Pointed for Doctors",
            bookedFor:allAppoint
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = allAppointmentDoc;
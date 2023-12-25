const diagnosed = require('../Models/diagnosed');
const appointments = require('../Models/appointments');

async function userAppointment(req,res){
    try {
        const {userId} = req;
        if(!userId || userId.length !== 24){
            res.status(401).json({
                message:"Invalid User! Please Login Again"
            })
        }
        else{
            let findWantAppoint = await appointments.find({appointBy:userId}).populate("appointBy");
            res.status(200).json({
                message:"Your Booked Appointments are here",
                bookedFor:findWantAppoint
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = userAppointment;
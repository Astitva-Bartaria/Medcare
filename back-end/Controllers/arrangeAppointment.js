const diagnosed = require('../Models/diagnosed');

async function arrangeAppointment(req,res){
    try {
        const allUserAppoint = await diagnosed.find({wantAppoint:true}).populate("userId");
        res.status(200).json({
            message:"All User with Appointment are here",
            allUsers:allUserAppoint
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = arrangeAppointment;
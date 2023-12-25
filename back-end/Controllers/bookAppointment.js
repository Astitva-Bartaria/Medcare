const diagnosed = require('../Models/diagnosed');
const appointments = require('../Models/appointments');

async function bookAppointment(req,res){
    try {
        const {userId} = req;
        if(!userId || userId.length !== 24){
            res.status(401).json({
                message:"Invalid User! Please Login Again"
            })
        }
        else{
            const {appId} = req.params;
            if(!appId || appId.length !== 24){
                res.status(401).json({
                    message:"Please Use a Valid Appointment"
                })
            }
            else{
                const appointWant = await diagnosed.findOneAndUpdate({userId:userId,_id:appId},{wantAppoint:true});
                await appointments.create({appointBy:userId,appointFor:appId});
                if(!appointWant){
                    res.status(404).json({
                        message:"Cannot Complete your Request! Try again later"
                    })
                }
                else{
                    res.status(200).json({
                        message:"Booked Your Appointment!"
                    })
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = bookAppointment;
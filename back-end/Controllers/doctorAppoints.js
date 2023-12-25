const appointments = require('../Models/appointments');
const user = require('../Models/user');

async function doctorBookAppoint(req,res){
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
                    message:"Invalid Query! Please try again later"
                })
            }
            else{
                const doctorAppoint = await user.findById({_id:userId});
                if(!doctorAppoint){
                    res.status(404).json({
                        message:"Cannot make an appointment for an invalid user!"
                    })
                }
                else{
                    const {appointDate, appointTime, doctorContact } = req.body;
                    if(!appointDate || !appointTime || !doctorContact){
                        res.status(401).json({
                            message:"Please Enter all informations!"
                        })
                    }
                    else{
                        const appointSet =  await appointments.findByIdAndUpdate({_id:appId},{appointStatus:"Approved",appointDate:appointDate,appointTime:appointTime,appointDoctor:doctorAppoint.userName,doctorContact:doctorContact});
                        if(!appointSet){
                            res.status(404).json({
                                message:"Appointment was not setup! Due to some error"
                            })
                        }
                        else{
                            res.status(200).json({
                                message:"Appointment Set! Please be ready on mentioned date"
                            })
                        }
                    }
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

module.exports = doctorBookAppoint;
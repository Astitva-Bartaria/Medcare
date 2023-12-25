const user = require('../Models/user');

async function editDetails(req,res){
    try {
        const {userId} = req;
        if(!userId || userId.length !== 24){
            res.status(401).json({
                message:"Invalid User! Please Login Again"
            })
        }
        else{
            const {userName, userEmail, userDob, userGender, userCountry, userRegion} = req.body;
            const updatedUser = await user.findByIdAndUpdate({_id:userId},{userName:userName, userEmail:userEmail, userDob:userDob, userGender:userGender, userCountry:userCountry, userRegion:userRegion});
            if(!updatedUser){
                res.status(404).json({
                    message:"Cannot Update! As the user donot exist"
                })
            }
            else{
                res.status(200).json({
                    message:"Details Updated Successfully"
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = editDetails;
const user = require('../Models/user');

async function userDetails(req,res){
    try {
        const {userId} = req;
        if(!userId || userId.length !== 24){
            res.status(401).json({
                message:"Invalid User! Please Login Again"
            })
        }
        else{
            const userDe = await user.findById({_id:userId});
            if(!userDe){
                res.status(404).json({
                    message:"Cannot find the user data your looking for!"
                })
            }
            else{
                userDe.userPassword = undefined;
                res.status(200).json({
                    message:"User Details are here",
                    userDetail:userDe
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

module.exports = userDetails;

async function isDoctor(req,res,next){
    try {
        const {isDoc} = req;
        if(!isDoc){
            res.status(401).json({
                message:"Invalid Token! Login Again"
            })
        }
        else{
            if(isDoc !== "doctor"){
                res.status(401).json({
                    message:"This is a Protected Route for Doctors Only!"
                })
            }
            else{
                next();
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = isDoctor;
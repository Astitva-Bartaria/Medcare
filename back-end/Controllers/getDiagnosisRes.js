const diagnosed = require('../Models/diagnosed');

async function getdiagnosisResults(req,res){
    try {
        const {userId} = req;
        if(!userId || userId.length !== 24){
            res.status(401).json({
                message:"Invalid User! Please Login Again"
            })
        }
        else{
            const diagnosedData = await diagnosed.find({userId:userId}).populate("userId");
            res.status(200).json({
                message:"Diagnosed data are here",
                userDiagnosed:diagnosedData
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = getdiagnosisResults;
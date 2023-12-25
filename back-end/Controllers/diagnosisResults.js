const diagnosed = require('../Models/diagnosed');

async function diagnosisResults(req,res){
    try {
        const {userId} = req;
        if(!userId || userId.length !== 24){
            res.status(401).json({
                message:"Invalid User! Please Login Again"
            })
        }
        else{
            const {dis} = req.params;
            await diagnosed.create({userId:userId,diseases:dis});
            res.status(200).json({
                message:"Diagnosed Result Added!"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = diagnosisResults;
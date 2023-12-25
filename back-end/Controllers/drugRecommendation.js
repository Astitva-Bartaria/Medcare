const diagnosed = require('../Models/diagnosed');

async function drugRecommendation(req, res) {
    try {
        const { fDrug, sDrug, tDrug } = req.body;
        if (!fDrug && !sDrug && !tDrug) {
            res.status(404).json({
                message: "Please Recommend Atleast One Drug"
            })
        }
        else {
            const { appId } = req.params;
            if (!appId || appId.length !== 24) {
                res.status(401).json({
                    message: "Invalid Diagnosed Id"
                })
            }
            else {
                if(fDrug !== undefined){
                    await diagnosed.findByIdAndUpdate({_id:appId},{$push:{medicines:fDrug}})
                }
                if(sDrug !== undefined){
                    await diagnosed.findByIdAndUpdate({_id:appId},{$push:{medicines:sDrug}})
                }
                if(tDrug !== undefined){
                    await diagnosed.findByIdAndUpdate({_id:appId},{$push:{medicines:tDrug}})
                }
                res.status(200).json({
                    message: "Medicine Recommendation Sent!"
                })

            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Sorry! There was an server-side error"
        })
    }
}

module.exports = drugRecommendation;
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function isLoggedIn(req,res,next){
    try {
        if(!req.headers){
            res.status(404).json({
                message:"Authantication-Missing"
            })
        }
        else{
            const token = req.headers.authorization.split(" ")[1];
            if(!token){
                res.status(404).json({
                    message:"Token Missing! Login Again"
                })
            }
            else{
                try {
                    const validToken = jwt.verify(token,process.env.SECRET);
                    if(validToken){
                        req.userId = validToken.userId;
                        req.isDoc = validToken.isDoc;
                        next();
                    }
                    else{
                        res.status(401).json({
                            message:"Invalid Token! Login Again"
                        })
                    }
                } catch (error) {
                    res.status(501).json({
                        message:"Invalid Token! Login Again"
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

module.exports = isLoggedIn;
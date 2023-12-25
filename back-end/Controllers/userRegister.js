const user = require('../Models/user');
const bcrypt = require('bcrypt');

async function userRegister(req,res){
    try {
        const {userName, accountType, userEmail, userPassword} = req.body;
        if(!userName || !accountType || !userEmail || !userPassword){
            res.status(401).json({
                message:"All Fields are neccessary"
            })
        }
        else{
            const emailAlreadyExist = await user.findOne({userEmail:userEmail});
            if(emailAlreadyExist){
                res.status(401).json({
                    message:"Email Already Exist! Try new One or Login"
                })
            }
            else{
                try {
                    const hasedPassword = await bcrypt.hash(userPassword,10);
                    if(!hasedPassword){
                        res.status(404).json({
                            message:"Password Filed is Neccessary"
                        })
                    }
                    else{
                        await user.create({userName,accountType,userEmail,userPassword:hasedPassword});
                        res.status(200).json({
                            message:"Registration Done! Login to Continue"
                        })
                    }
                } catch (error) {
                    res.status(501).json({
                        message:"Error while protecting your Password"
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

module.exports = userRegister;
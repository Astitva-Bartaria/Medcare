const user = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function userLogin(req,res){
    try {
        const {userEmail, userPassword} = req.body;
        if(!userEmail || !userPassword){
            res.status(401).json({
                message:"All Fields are neccessary"
            })
        }
        else{
            const userExist = await user.findOne({userEmail:userEmail});
            if(!userExist){
                res.status(404).json({
                    message:"Email doesnot exist! Register First"
                })
            }
            else{
                try {
                    if(await bcrypt.compare(userPassword,userExist.userPassword)){
                        const token = jwt.sign({
                            userId:userExist._id,
                            isDoc:userExist.accountType
                        },process.env.SECRET);
                        res.status(200).json({
                            message:"Login Successfully!",
                            yourToken:token
                        })
                    }
                    else{
                        res.status(401).json({
                            message:"Invalid Password!"
                        })
                    }
                } catch (error) {
                    res.status(501).json({
                        message:"Error while creating Token! Try again"
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

module.exports = userLogin;
const User = require('../schemas/useSchema')

module.exports.signup = async(req,res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.signup(email, password);
        res.status(200).json({message:"created a user", user})
    }catch(error){
        res.status(401).json({message: error.message})
    }
}

module.exports.login = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.login({email, password})
        res.status(200).json({message: "logged in successfully", user})
    }catch(error){
        res.status(401).json({message: error.message})
    }
}
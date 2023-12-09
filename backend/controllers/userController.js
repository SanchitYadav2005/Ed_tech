const User = require('../schemas/useSchema')
const jwt = require('jsonwebtoken')

const createToken= (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"})
}

module.exports.signup = async(req,res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.signup(email, password);
        const token = createToken(user._id)
        res.status(200).json({message:"created a user", user, token})
    }catch(error){
        res.status(401).json({message: error.message})
    }
}

module.exports.loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id)
        res.status(200).json({message: "logged in successfully", user, token})
    }catch(error){
        res.status(401).json({message: error.message})
    }
}
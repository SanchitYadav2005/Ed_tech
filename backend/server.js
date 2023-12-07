require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./schemas/useSchema");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', (req,res)=>{
    res.status(200).json({message: "working"})
})
app.get('/signup', (req,res)=>{
    res.status(200).json({message: "working"})
})
app.post('/signup', async(req,res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.create({email, password});
        res.status(200).json({message:"created a user", user})
    }catch(error){
        res.status(401).json({message: error.message})
    }
})


mongoose.connect(process.env.DB_URL)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("connected to server and atlas on port:- ", process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

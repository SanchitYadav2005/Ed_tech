require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/user/', userRoutes)


app.get('/', (req,res)=>{
    res.status(200).json({message: "working"})
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

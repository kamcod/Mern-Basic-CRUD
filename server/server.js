
const express = require('express');
const app =express();

const connectDB = require('./db/connect')
const dotenv = require('dotenv')
dotenv.config({path: 'config/config.env'});




const port = 5002;

const start = async () =>{
try {
    await connectDB(process.env.MONGO_URI)
     .then(()=>{
        app.listen(port, ()=>{
            console.log(`Server listening at port ${port}...`)
        })
     })
} catch (error) {
    console.log(error)
}
}

start()
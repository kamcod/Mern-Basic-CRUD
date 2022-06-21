const express = require('express');
const app = express();
const PORT = 5002;

require('dotenv').config({path: "config/config.env"});
const connectDB = require('./db/connect');

const start = async () => {
    try {
        await connectDB(process.env.MONGOURI);
    app.listen(PORT, ()=>{
        console.log(`Server is listening at port ${PORT}`)
    })
    } catch (error) {
        console.log(error)
    }
    
}

start()
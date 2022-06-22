
const express = require('express');
const app =express();
const cors = require('cors');

app.use(cors())

const connectDB = require('./db/connect')
const dotenv = require('dotenv');
const router = require('./routes/routes');
dotenv.config({path: 'config/config.env'});




app.use('/', router);


const start = async () =>{
try {
    await connectDB(process.env.MONGO_URI)
     .then(()=>{
        console.log("DB connected!")
        app.listen(process.env.port, ()=>{
            console.log(`Server listening at port ${process.env.port}...`)
        })
     })
} catch (error) {
    console.log(error)
}
}
start()

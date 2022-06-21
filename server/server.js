
const express = require('express');
const app =express();
const cors = require('cors');

app.use(cors())

const connectDB = require('./db/connect')
const dotenv = require('dotenv')
dotenv.config({path: 'config/config.env'});

const port = 5002;

app.get('/getDashboardStats', (req, res) => {
    res.status(200).json({name: 'john', designation: 'engineer'})
    res.end()
})


const start = async () =>{
try {
    await connectDB(process.env.MONGO_URI)
     .then(()=>{
        console.log("DB connected!")
        app.listen(port, ()=>{
            console.log(`Server listening at port ${port}...`)
        })
     })
} catch (error) {
    console.log(error)
}
}
start()

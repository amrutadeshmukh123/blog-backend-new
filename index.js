const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userApi')

const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use('/blogApi',userRoutes)


mongoose.connect('mongodb+srv://amruta:SpXxcNm5gDKIi7wO@blogtest.nej15.mongodb.net/',{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected !!")
}).catch(()=>{
    console.log("Error while connecting the database:")
})


server.listen(2000,()=>{
    console.log("Server started listening at port no 2000")
})


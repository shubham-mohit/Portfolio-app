const express = require('express')
const cors = require ('cors')
const Dotenv = require('dotenv')
const route = require('./routes/portRoutes')
const path = require('path')

Dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "./portfolio/build")))

//Router

app.use('/api/v1/portfolio', route)
app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, './portfolio/build/index.html'))
})

// PORT 
const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`Express app Running on PORT ${PORT}`)
})


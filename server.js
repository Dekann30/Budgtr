require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const budget = require('./models/budget.js')

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(PORT, ()=>{console.log("It's ALIVE~")})
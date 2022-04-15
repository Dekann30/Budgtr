require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const budget = require('./models/budget.js')

//Middleware
app.use(express.urlencoded({extended:false}))
app.use('/static', express.static('public'))

app.get('/', (req,res)=>{
    res.send('<h1>My Budget App</h1>')
})

//Index

//New

//Create

//Show

app.listen(PORT, ()=>{console.log("It's ALIVE~")})
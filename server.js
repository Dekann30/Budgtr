require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const budget = require('./models/budget.js')
const methodOverride = require('method-override')
const bankAccount = require('./public/app.js')
const total = require('./public/app.js')

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.get('/', (req,res)=>{
    res.send('<h1>My Budget App</h1>')
})

//Index
app.get('/budgets', (req,res)=>{
    res.render('index.ejs', {allEntries: budget, sum:bankAccount})
})

//New
app.get('/budgets/new', (req,res)=>{
    res.render('new.ejs')
})

//Create
app.post('/budgets', (req, res)=>{
    req.body.amount = parseInt(req.body.amount)
    total.push(req.body.amount)
    budget.push(req.body)
    res.redirect('/budgets')
    console.log(budget)
})

//Show
app.get('/budgets/:id', (req,res)=>{
    res.render('show.ejs', {entry: budget[req.params.id]})
})

app.listen(PORT, ()=>{console.log("It's ALIVE~")})
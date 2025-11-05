const express = require('express')
require('dotenv').config()
console.log(process.env)
const app = express()

// const port = 3000

app.get('/', (req, res)=>{
    res.send('hello dear friend saif')
})

app.get('/warning', (req, res)=>{
    res.send('this is a warning to inform you that')
})

app.get('/started', (req, res)=>{
    res.send('i have started learning backend')
})

app.get('request', (req, res)=>{
    res.send('its a humble request for u to begin learning backend and ingeneral start coding on your monitor')
})

app.get('/consequences', (req, res)=>{
    res.send('else you know what the consequences will lead to (2.2lLPA + need of abbu ka pocket money at the fine age of 23)')
})

app.get('/goodday', (req, res)=>{
    res.send('thank you and have a good day')
})

app.listen(process.env.PORT, ()=>{
    console.log(`this app is running on port ${process.env.PORT}`)
})
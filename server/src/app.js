const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  
})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/register', (req, res) => {
    res.send({
        message: 'Hello ${req.body.email} Your user was registered! Have fun!'
    })
})

app.listen(process.env.PORT || 8081)

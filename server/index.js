require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// set up
const app = express()
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
global.__basedir = __dirname // set up a basedir variable that points to server dir for everyone to use

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req,res) => {
  res.send("try to visit the other path")
})

// Routes
const Song = require(__dirname + '/api/routes/song');
const Book = require(__dirname + '/api/routes/book');

app.use('/api/book', Book)
app.use('/api/song', Song)

const port = process.env.PORT || 3000;

app.listen(port, function() {
  if(port === 3000)
    console.log(`Server started on port ${port}, open http://localhost:${port}`)
})

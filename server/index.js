const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// server set up
const app = express()
mongoose.connect('mongodb://localhost:27017/catalog', {useNewUrlParser: true, useUnifiedTopology: true})

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.get('/', (req,res) => {
  res.send("heoihej")
})

// Routes
const Song = require('./api/routes/song');
const Book = require('./api/routes/book');

app.use('/api/book', Book)
app.use('/api/song', Song)

const port = process.env.PORT || 3000;

app.listen(port, function() {
  if(port === 3000)
    console.log(`Server started on port ${port}, open http://localhost:${port}`)
})

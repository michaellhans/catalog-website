const express = require('express')
const ErrorHandler = require(__basedir + '/routes/util/MongooseErrorHandler')

const router = express.Router();

// Object
const Book = require(__basedir + '/model/Book')

// Index
router.get('/', async (req, res) => {
  const books = await Book.find({});
  res.send(books);
})

// Nama Search
router.get('/nama', async (req, res) => {
  const requestQuery = req.query;
  let { nama, hardcopy, softcopy, instrumen } = requestQuery;
  let searchQuery = {
    nama : new RegExp(nama),
    instrumen : new RegExp(instrumen),
    hardcopy,
    softcopy
  }

  const books = await Book.find(searchQuery)

  res.send(books)
})

// Kode Search
router.get('/kode', async (req, res) => {
  const requestQuery = req.query;
  let { kode, hardcopy, softcopy, instrumen } = requestQuery;
  let searchQuery = {
    kode : new RegExp(kode),
    instrumen : new RegExp(instrumen),
    hardcopy,
    softcopy
  }

  const books = await Book.find(searchQuery)

  res.send(books)
})

// Add
router.post('/', async (req, res) => { 
  const { nama, kode, hardcopy, softcopy, instrumen } = req.body;
  const book = new Book({
    nama,
    kode,
    hardcopy,
    softcopy,
    instrumen
  })

  book.save().then(
    (resp) => {
      res.status(201).send()
      console.log(resp)
    }
  ).catch(
    (err) => {
      console.log(err)
      res.status(400).send({
        status: 400,
        body: ErrorHandler.getErrorMessage(err)
      })
    }
  )
})
/**
- Nama Lagu / Buku (STRING)
- Kode Buku (STRING)
- Hardcopy (BOOLEAN)
- Softcopy (BOOLEAN)
- Instrumen (STRING)
 */

// Delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  Book.deleteOne({_id: id}).then(
    () => {
      console.log("Successfully removed item with id " + id)
      res.status(200).send()
    }
  ).catch(
    (err) => console.log(err)
  );
})

// delete all
router.delete('/', async (req, res) => {
  Book.remove({}).then(
    () => res.status(200).send()
  ).catch(
    (err) => {
      res.status(400).send({
        status: 400,
        body: ErrorHandler.getErrorMessage(err)
      })
    }
  );
})

module.exports = router;
const express = require('express')

const router = express.Router();

// Object
const Book = require('../../database/model/Book')

// Index
router.get('/', async (req, res) => {
  const books = await Book.find({});
  res.send(books);
})

// Add
router.post('/', async (req, res) => { 
  const { nama, kode, hard_copy, soft_copy, instrumen } = req.body;
  const book = new Book({
    nama,
    kode,
    hard_copy,
    soft_copy,
    instrumen
  })

  book.save().then(
    () => res.status(201).send()
  ).catch((err) => {
    console.log("error has occured")
  })
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
    (err) => console.log("err")
  );
})

module.exports = router;